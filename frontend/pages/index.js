import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection,Service,NFTSlider } from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service/>
      <NFTSlider/>
    </div>
  );
};

export default Home;