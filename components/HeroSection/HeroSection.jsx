import React from "react";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button,LottieAnimation } from "../componentsindex";
import animationData from "../../img/hero.json"
import Link from "next/link";

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
          <Link href="/search">
            <a>
              <Button btnName="Start your search" handleClick={()=>{}}/>
            </a>
          </Link>
          
        </div>
        <div className={Style.heroSection_box_right}>
          <LottieAnimation animationData={animationData} style={{marginTop:-50}}/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
