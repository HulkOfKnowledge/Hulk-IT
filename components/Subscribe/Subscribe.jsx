import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import LottieAnimation from "../LottieAnimation/LottieAnimation";
import animationData from "../../img/subscribe.json";
import Style from "./Subscribe.module.css";


const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
                <LottieAnimation animationData={animationData} style={{width:"100%",height:"100%"}}/>
        </div>

        <div className={Style.subscribe_box_right}>
          <h2>Never miss a drop</h2>
          <p>
            Subcribe to our super-exclusive drop list and be the first to know
            abour upcoming drops
          </p>
          <div className={Style.subscribe_box_right_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div>

          <div className={Style.subscribe_box_right_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div>

          <div className={Style.subscribe_box_right_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscribe_box_right_input_icon} />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Subscribe;