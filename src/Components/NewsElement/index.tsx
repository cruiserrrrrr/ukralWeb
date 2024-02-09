import React from 'react';
import styles from "./index.module.scss";

interface INewsElement {
  text: string,
  avatar: string,
  images: Array<string>,
  userName: string,
  userLogin: string
}

export const NewsElement = (props: INewsElement) => {
  const {
    text = '',
    avatar = '',
    images = [],
    userName = '',
    userLogin = ''
  } = props;
  return (
    <div className={styles.news_element}>
      <div className={styles.news_element__container}>
        <div className={styles.news_content}>
          <div className={styles.news_content_header}>
            <div className={styles.avatar_wrapper}>
              <img src={avatar} alt="avatar" />
            </div>
            <div className={styles.user_info}>
              <p className={styles.user_name}>{userName}</p>
              <p className={styles.user_login}>{userLogin}</p>
            </div>
          </div>
          <div className={styles.news_content_text}>
            {text && <p>{text}</p>}
            <div className={styles.images_container}>
              {images.length && images.map((image, index) => (
                <img
                  className={styles.image}
                  key={index + "_" + image}
                  src={image}
                  alt="image"
                />
              ))}
            </div>
          </div>
          <div className={styles.news_content__footer}>

          </div>
        </div>
      </div>
    </div>
  )
}