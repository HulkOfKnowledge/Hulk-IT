import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection,Service,NFTSlider,Subscribe,Title,Category,Filter,NFTCard,Collection } from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <NFTSlider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;