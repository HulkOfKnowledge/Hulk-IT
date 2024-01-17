import React from "react";
import Image from "next/image";

import LottieAnimation from "../LottieAnimation/LottieAnimation";
import animationData from '../../img/s1.json';
import animationData2 from '../../img/s2.json';
import animationData3 from '../../img/s3.json';
import animationData4 from '../../img/s4.json';

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";
const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
        <LottieAnimation animationData={animationData} style={{ width: 200, height: 200, margin: 'auto' }} />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={Style.service_box_item}>
        <LottieAnimation animationData={animationData2} style={{ width: 200, height: 200, margin: 'auto' }} />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Select Nft</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={Style.service_box_item}>
        <LottieAnimation animationData={animationData3} style={{ width: 200, height: 200, margin: 'auto' }} />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={Style.service_box_item}>
        <LottieAnimation animationData={animationData4} style={{ width: 200, height: 200, margin: 'auto' }} />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Start trading NFTs</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;