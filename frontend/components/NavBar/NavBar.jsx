import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../componentIndex";
import Images from "../../img";

const NavBar = () => {
    // UseState
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu = (e) => {
        const btnText = e.target.innerText;
        if (btnText == "Discover") {
            setDiscover(true);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        }
        else if (btnText == "Help Center") {
            setDiscover(false);
            setHelp(true);
            setNotification(false);
            setProfile(false);
        }
    };

    const openNotification = () => {
        if (!notification) {
            setNotification(true);
            setDiscover(false);
            setHelp(false);
            setProfile(false);

        }else{
            setNotification(false);
        }
    };
    
    const openProfile = () => {
        if (!profile) {
            setProfile(true);
            setDiscover(false);
            setHelp(false);
            setNotification(false);
        }else{
            setProfile(false);
        }
    };

    const openSideBar = () => {
        if (!openSideMenu) {
            setOpenSideMenu(true);
        }else{
            setOpenSideMenu(false);
        }
    };
    

        return (
            <div className={Style.navbar}>
                <div className={Style.navbar_container}>
                    {/* Left Section */}
                    <div className={Style.navbar_container_left}>
                        <div className={Style.logo}>
                            <Image src={Images.logo} alt="logo" width={150} height={150} />
                            <div className={Style.navbar_container_left_box_input}>
                                <div className={Style.navbar_container_left_box_input_box}>
                                    <input type="text" placeholder="Search" />
                                    <BsSearch onClick={() => console.log("search")} className={Style.search_icon} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Left Section */}

                    {/* Right Section */}
                    <div className={Style.navbar_container_right}>
                        {/* DISCOVER MENU */}
                        <div className={Style.navbar_container_right_discover}>    
                            <p onClick={(e) => openMenu(e)}> Discover</p>
                            {discover && (
                                <div className={Style.navbar_container_right_discover_box} >
                                    <Discover />
                                </div>
                            )}

                        </div>

                        {/* HELP CENTER MENU */}
                        <div className={Style.navbar_container_right_help}>
                            <p onClick={(e) => openMenu(e)}> Help Center</p>
                            {help && (
                                <div className={Style.navbar_container_right_help_box}>
                                    <HelpCenter />
                                </div>
                            )}
                        </div>
                        
                        {/* NOTIFICATION MENU */}
                        <div className={Style.navbar_container_right_notify}>
                            <MdNotifications onClick={() => openNotification()} />
                            {notification && <Notification />}
                        </div>

                        {/* CREATE BUTTON SECTION */}
                        <div className={Style.navbar_container_right_button}>
                            <Button btnText="Create"/>
                        </div>

                        {/* USER PROFILE MENU */}
                        <div className={Style.navbar_container_right_profile_box}>
                            <div className={Style.navbar_container_right_profile}>
                                <Image src={Images.user1} alt="Profile" width={40} height={40} onClick={()=> openProfile()} className={Style.navbar_container_right_profile} />

                                {profile && <Profile />}
                            </div>
                        </div>

                        {/* MENU BUTTON Mobile */}
                        <div className={Style.navbar_container_right_menuBtn}>
                            <CgMenuRight className={Style.menuIcob} onClick={() => openSideBar()} />
                        </div>
                    </div>
                    {/* End of Right Section */}
                </div>

                {/* SIDE BAR Mobile */}
                {openSideMenu && (
                    <div className={Style.sideBar}>
                        <SideBar setOpenSideMenu={setOpenSideMenu}/>
                    </div>
                
                )}
            </div>
        );
    };

export default NavBar;