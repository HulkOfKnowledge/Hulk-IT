import React from "react";
import {LottieAnimation} from "../componentsindex";
import animationData1 from "../../img/s1.json";
import animationData2 from "../../img/s2.json";
import animationData3 from "../../img/s3.json";
import animationData4 from "../../img/s4.json";

//INTERNAL IMPORT
import Style from "./Service.module.css";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <LottieAnimation animationData={animationData1} style={{ width: 150, height: 200, margin: ' auto' }} />
          <h3>Search & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={Style.service_box_item}>
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <LottieAnimation animationData={animationData2} style={{ width: 150, height: 200, margin: 'auto' }} />
          <h3>Select Preference</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={Style.service_box_item}>
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <LottieAnimation animationData={animationData3} style={{ width: 150, height: 200, margin: 'auto' }} />
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={Style.service_box_item}>
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <LottieAnimation animationData={animationData4} style={{ width: 150, height: 200, margin: 'auto' }} />
          <h3>Start trading</h3>
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
