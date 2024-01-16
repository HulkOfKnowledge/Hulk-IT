import React from "react";
import Image from "next/image";
import Images from "../../../img";
import Style from "./Notification.module.css";

const Notification = () => {
    return(
        <div className={Style.notification}>
            <p>Notification</p>
            <div className={Style.notification_box}>
                <div className={Style.notification_box_image}>
                    <Image src={Images.user3} alt="profile image" width={50} height={50} />
                </div>
                <div className={Style.notification_box_info}>
                    <h4>HulkOfKnowledge</h4>
                    <p>Measure action your user...</p>
                    <small>3 Minutes Ago</small>
                </div>
                <span className={Style.notification_box_new}></span>
            </div>
        </div>
    )
}

export default Notification;