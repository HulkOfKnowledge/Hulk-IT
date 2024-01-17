import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection,Service,NFTSlider,Subscribe } from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service/>
      <NFTSlider/>
      <Subscribe/>
    </div>
  );
};

export default Home;