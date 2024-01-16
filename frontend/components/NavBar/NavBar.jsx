import React,{useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";

import Style from "./NavBar.module.css";
import {Discover, HelpCenter,Notification,Profile,SideBar} from "./index"; 
import {Button} from "../componentIndex";
import Images from "../../img";

const NavBar = () => {
    // UseState
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);
    return(
        <div>NavBar</div>
    )
}

export default NavBar;