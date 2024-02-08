import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import NavElem from "../../Components/NavElem";
import CustomLink from "../../Components/CustomLink";
import Sidebar from "../../Components/SideBar";
import AddPost from "../../Components/AddPost";

const NewsPage = () => {

    return (
        <div className={styles.news_wrapper}>
            <Sidebar />
            <div className={styles.news_container}>
                <AddPost />
            </div>
        </div>
    )
}

export default NewsPage;