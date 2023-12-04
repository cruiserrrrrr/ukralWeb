import React, { useState } from "react";
import styles from "./index.module.scss";
import NavElem from "../../Components/NavElem";
import CustomLink from "../../Components/CustomLink";
import Sidebar from "../../Components/SideBar";

const NewsPage = () => {

    return (
        <div className={styles.news_wrapper}>
            <Sidebar />
            <div className={styles.news_container}>
                <p>News</p>
            </div>
        </div>
    )
}

export default NewsPage;