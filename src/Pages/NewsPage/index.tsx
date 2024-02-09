import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Sidebar from "../../Components/SideBar";
import AddPost from "../../Components/AddPost";
import { NewsElement } from "../../Components/NewsElement";

const NewsPage = () => {

  return (
    <div className={styles.news_wrapper}>
      <Sidebar />
      <div className={styles.news_container}>
        <AddPost />
        <NewsElement
          text={'first news'}
          avatar="../../assets/images/unnamed.jpg"
          images={["../../assets/images/unnamed.jpg"]}
          userName={"cruiserrrrrr"}
          userLogin={"@cruiserrrrrr"}
        />
      </div>
    </div>
  )
}

export default NewsPage;