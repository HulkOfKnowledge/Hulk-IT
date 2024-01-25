import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

const SideBar = ({ setOpenSideMenu }) => {
  //------USESTATE
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "NFT Details",
      link: "nft-details",
    },
    {
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
  ];
  //------HELP CNTEER
  const helpCenter = [
    {
      name: "About",
      link: "about-us",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  
  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />

      <div className={Style.sideBar_box}>
        <Link href="/">
          <Image src={images.logo} alt="logo" width={150} height={150} style={{ cursor: 'pointer' }} />
        </Link>
        
        <p>
          Discover the most outstanding articles on all topices of NFT & write
          your own stories and share them
        </p>
        <div className={Style.sideBar_social}>
          <a href="#" onClick={() => closeSideBar()}>
            <TiSocialFacebook />
          </a>
          <a href="#" onClick={() => closeSideBar()}>
            <TiSocialLinkedin />
          </a>
          <a href="#" onClick={() => closeSideBar()}>
            <TiSocialTwitter />
          </a>
          <a href="#" onClick={() => closeSideBar()}>
            <TiSocialYoutube />
          </a>
          <a href="#" onClick={() => closeSideBar()}>
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className={Style.sideBar_menu}>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((el, i) => (
                <p key={i + 1} onClick={() => closeSideBar()}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openHelpMenu()}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>

          {openHelp && (
            <div className={Style.sideBar_discover}>
              {helpCenter.map((el, i) => (
                <p key={i + 1} onClick={() => closeSideBar()}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={Style.sideBar_button}>
        <Link href={{ pathname: "/upload-nft" }}>
          <a onClick={() => closeSideBar()}>
            <Button btnName="Upload NFT" handleClick={() => {}} />
          </a>
        </Link>
        <Link href={{ pathname: "/connect-wallet" }}>
          <a onClick={() => closeSideBar()}>
            <Button btnName="Connect Wallet" handleClick={() => {}} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
