// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";


contract H_Marketplace is ERC721URIStorage{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemSold;

    uint256 listingPrice = 0.025 ether;

    address payable owner;

    mapping(uint256 => MarketItem) public idMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event MarketItemCreated(
        uint256 indexed tokenId,
        address  seller,
        address  owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner() {
        require(msg.sender == owner,"Error: Owner Only Function");
        _;
    }

    constructor() ERC721("H_Marketplace Token", "HMP") {
        owner = payable(msg.sender);
    } 

    function updateListingPrice(uint256 _listingPrice) public payable onlyOwner
    {
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns(uint256)
    {
        return listingPrice;
    }

    // create a new NFT
    function createToken( string memory tokenURI, uint256 price) public{
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        createMarketItem(newTokenId, price);

        return newTokenId;
        
    }

    function createMarketItem(uint256 tokenId, uint256 price) private{
        require(price>0, "Error: Price must be greater than 0");
        require(_exists(tokenId), "Error: Token does not exist");
        require(msg.value == listingPrice, "Error: Price must be equal to listing price");

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);

        emit MarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );

    }

    // resale NFT
    function reSellToken(uint256 tokenId, uint256 price) public{
        require(idMarketItem[tokenId].owner == msg.sender, "Error: You are not the owner of this token");
        require(msg.value==listingPrice, "Error: Price must be equal to listing price");


        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenId);

    }

    // create martket sale
    function createMarketsale(uint256 tokenId)
    public payable{
        uint256 price = idMarketItem[tokenId].price;
        require(msg.value == price, "Error: Submit asking price in order to complete purchase");

        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold=true;
        idMarketItem[tokenId].owner = payable(address(0));

        _itemsSold.increment();

        _transfer(address(this),msg.sender,tokenId);
        payable(owner).transfer(listingPrice);
        payable(idMarketItem[tokenId].seller).transfer(msg.value);

    }

    // getting unsold nft data
    function fetchMarketItem() public view returns(MarketItem[] memory){
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;
        
        MarketItem[] memory items = new MarketItem[](unSoldItemCount);
        for (uint256 i=0; i<itemCount;i++){
            if (idMarketItem[i+1].owner == address(this)){
                uint256 currentId = i+1;

                MarketItem storage currentItem = idMarketItem[current];
                items[currentIndex] = currentItem;
                currentIndex +=1;
            }
        }
        return items;
    }

    //purchase item
    function fetchMyNFT()
    public view returns(MarketItem[] memory){
        uint256 totalCount = _tokenIds.current();
        uint256 ItemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i=0; i<totalcount;i++){
            if(idMarketItem[i+1].owner == msg.sender){
                itemCount+=1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i=0;i<totalCount;i++){
            if(idMarketItem[i+1].owner == msg.sender){
                uint256 currentId = i+1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex +=1;
            }
        }
        return items;
    }

    // single user item
    function fetchItemsListed()
    public view returns(MarketItem[] memory){
        uint256 totalCount = _tokenIds.current;
        uint256 itemCount =0;
        uint256 currentIndex=0;

        for(uint256 i=0;i<totalCount; i++){
            if(idMarketItem[i+1],seller=msg.sender){
                itemCount+=1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i=0;i<totalCount;i++){
            if(idMarketItem[i+1].seller ==msg.sender){
                uint256 currentId = i+1;

                MarketItem storage currentItem= idMarketItem[currentId]
                items[currentIndex] = currentItem;
                currentIndex+=1;
            }
        }
        return items;
    }


}