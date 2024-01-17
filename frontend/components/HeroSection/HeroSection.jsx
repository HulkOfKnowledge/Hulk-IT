import React,{useEffect,useRef } from "react";
import LottieAnimation from "../LottieAnimation/LottieAnimation";
import animationData from '../../img/hero.json';


//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";



const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs 🖼️</h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <LottieAnimation animationData={animationData} style={{marginTop:-45}} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;