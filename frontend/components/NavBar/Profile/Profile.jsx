import React from "react";
import Image from "next/image";
import {FaUserAlt, FaRegImage, FaUserEdit} from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import {TbDownloadOff, TbDownload}  from "react-icons/tb";
import Images from "../../../img";
import Link from "next/link";
import Style from "./Profile.module.css";

const Profile = () => {
    return(
        <div className={Style.profile}>
            <div className={Style.profile_account}>
                <Image src={Images.user1} alt="User Profile" width={50} height={50} className={Style.profile_account_img}/>
                <div className={Style.profile_account_info}>
                    <p>John Doe</p>
                    <small>X89ror8oeele8u33393p...</small>
                </div>
            </div>
            <div className={Style.profile_menu}>
                <div className={Style.profile_menu_one}>
                    <div className={Style.profile_menu_one_item}>
                        <FaUserAlt />
                        <p>
                            <Link href={{pathname:"/myprofile"}}>
                                My Profile
                            </Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_one_item}>
                        <FaRegImage />
                        <p>
                            <Link href={{pathname:"/my-items"}}>
                                My Items
                            </Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_one_item}>
                        <FaUserEdit />
                        <p>
                            <Link href={{pathname:"/edit-profile"}}>
                                Edit Profile
                            </Link>
                        </p>
                    </div>
                </div>

                <div className={Style.profile_menu_two}>
                    <div className={Style.profile_menu_one_item}>
                        <MdHelpCenter />
                        <p>
                            <Link href={{pathname:"/help"}}>
                                Help
                            </Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_one_item}>
                        <TbDownloadOff />
                        <p>
                            <Link href={{pathname:"/disconnet"}}>
                                Disconnect
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;