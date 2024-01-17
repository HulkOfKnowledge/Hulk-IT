import React,{useEffect,useRef } from "react";
import lottie from 'lottie-web';
import animationData from '../../img/hero.json';


//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

const LottieAnimation = ({ animationData, loop = true }) => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay: true,
        animationData,
      });
  
      return () => anim.destroy(); // Cleanup animation on unmount
    }, [animationData, loop]);
  
    return <div ref={containerRef} style={{ marginTop: '-45px' }}></div>;
  };

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
          <LottieAnimation animationData={animationData} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;