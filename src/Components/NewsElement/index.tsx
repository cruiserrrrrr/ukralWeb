import React from 'react';
import styles from "./index.module.scss";

interface INewsElement {
    text: string,
    avatar: string,
    image: string,
    userName: string,
    userLogin: string
}

const NewsElement = (props: INewsElement) => {

    const { text = '', avatar = '', image = '', userName = '', userLogin = '' } = props;

    return (
        <div className={styles.news_element}>
            <div className={styles.news_element__container}>
                <div className={styles.avatar_wrapper}>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className={styles.news_content}>
                    <div className={styles.news_content_header}>
                        <p>{userName}</p>
                        <p>{userLogin}</p>
                    </div>
                    <div className={styles.news_content_text}>
                        <p>{text}</p>
                        {image && <img src={image} alt="image" />}
                    </div>
                    <div className={styles.news_content__footer}>

                    </div>
                </div>
            </div>
        </div>
    )
}