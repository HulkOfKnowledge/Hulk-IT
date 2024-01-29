import React,{useState,useEffect,useContext} from 'react';
import web3Modal from 'web3modal';
import { ethers } from 'ethers';
import Router from 'next/router';
import axios from 'axios';
import {create as ipfsHttpClient} from 'ipfs-http-client';

import {nftMarketplaceAddress,nftMarketplaceABI} from './constants';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

const fetchContract = (signerOrProvider) => new ethers.Contract(nftMarketplaceAddress,nftMarketplaceABI,signerOrProvider);

const connectingWithSmartContract = async()=>{
    try{
        const web3Modal= new web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    }catch(error){
        console.log("connecting with smart contract error",error);
    }
}

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({children}) => {

    const [currentAccount,setCurrentAccount] = useState("");

    const checkIfWalletConnected = async()=>{
        try {
            if (!window.ethereum) return console.log("Wallet not connected, Install Metamask");
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length){
                setCurrentAccount(accounts[0])
            } else{
                console.log("No accounts found");
            }
        } catch (error) {
            console.log("check if wallet connected error",error);
        }   
    }

    useEffect(()=>{checkIfWalletConnected()},[]);

    const connectWallet = async()=>{
        try {
            if (!window.ethereum) return console.log("Wallet not connected, Install Metamask");
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            console.log("connect wallet error",error);
        }
    }

    const uploadToIPFS = async (file)=>{
        try {
            const added= await client.add({content: file});
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            return url;
        } catch (error) {
            console.log("upload to ipfs error",error);
        }
    }
    
    const createNFT = async(formInput,fileUrl,router) =>{
        try {
            const {name,description,price} = formInput;
            if (!name || !description || !price || !fileUrl) return console.log("NFT Form is incomplete");

            const data = JSON.stringify({
                name,
                description,
                image: fileUrl,
            });
            try {
                const added = await client.add(data);
                const url = `https://ipfs.infura.io/ipfs/${added.path}`;
                await createSale(url,price);
            } catch (error) {
                console.log("upload to ipfs error",error);
            }
        } catch (error) {
            console.log("create nft error",error);
        }
    }

    const createSale = async(url,formInputPrice,isReselling,id)=>{
        try {
            const price = ethers.utils.parseUnits(formInputPrice, 'ether');
            const contract = await connectingWithSmartContract();
            const listingPrice = await contract.getListingPrice();
            const transaction = !isReselling? await contract.createToken(url,price,{value: listingPrice.toString()}): await contract.reSellToken(url,price,{value: listingPrice.toString()});

            await transaction.wait();

        } catch (error) {
            console.log("create sale error",error);
        }
    }

    const fetchNFTs = async()=>{
        try {
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);

            const data = await contract.fetchMarketItem();
            // console.log("fetch nfts data",data);

            const items = await Promise.all(data.map(async({tokenId,seller,owner,price:unformattedPrice})=>{
                const tokenURI = await contract.tokenURI(tokenId);
                const {
                    data:{image,name,description},
                } = await axios.get(tokenURI);
                const price = ethers.utils.formatUnits(unformattedPrice.toString(), 'ether');
                return {
                    price,
                    tokenId: tokenId.toNumber(),
                    seller,
                    owner,
                    image,
                    name,
                    description,
                    tokenURI,
                }
            }))
            return items;
        } catch (error) {
            console.log("fetch nfts error",error);
        }
    }

    const fetchMyNFTsorListedNFTs = async(type)=>{
        try {
            const contract = await connectingWithSmartContract();
            const data= type =="fetchItemsListed"? await contract.fetchItemsListed(): await contract.fetchMyNFT();
            const items = await Promise.all(data.map(async({tokenId,seller,owner,price:unformattedPrice})=>{
                const tokenURI = await contract.tokenURI(tokenId);
                const {
                    data:{image,name,description},
                } = await axios.get(tokenURI);
                const price = ethers.utils.formatUnits(unformattedPrice.toString(), 'ether');
                return {
                    price,
                    tokenId: tokenId.toNumber(),
                    seller,
                    owner,
                    image,
                    name,
                    description,
                    tokenURI,
                }
            }))
            return items;
        } catch (error) {
            console.log("fetch my nfts error",error);
        }
    }

    const buyNFT = async(nft)=>{
        try {
            const contract = await connectingWithSmartContract();
            const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');

            const transaction = await contract.createMarketSale(nft.tokenId,{value: price});
            await transaction.wait();
        } catch (error) {
            console.log("buy nft error",error);
        }
    }

    return(
        <NFTMarketplaceContext.Provider value={{checkIfWalletConnected,connectWallet,uploadToIPFS,createNFT,fetchNFTs,fetchMyNFTsorListedNFTs,createSale,buyNFT,currentAccount}}>
            {children}
        </NFTMarketplaceContext.Provider>
    );
};