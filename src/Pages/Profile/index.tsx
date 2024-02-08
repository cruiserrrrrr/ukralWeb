import React from "react";
import styles from "./index.module.scss";
import Sidebar from "../../Components/SideBar";

const Profile = () => {
    return (
        <div className={styles.profile_wrapper}>
            <Sidebar/>
            <div className={styles.profile_container}>

            </div>
        </div>
    )
}

export default Profile;