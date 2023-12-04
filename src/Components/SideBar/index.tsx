import React, { useEffect, useState } from "react";
import styles from "./index.module.scss"
import NavElem from "../NavElem";
import Logo from "../Logo";
import Icon from "../Icon";

const Sidebar = () => {

    return (
        <div className={styles.sidebar_wrapper}>
            <div className={`${styles.sidebar_container}`}>
                <Logo />
                <NavElem title="Новости" link="/" iconname="main" />
                <NavElem title="Сообщения" link="/chats" iconname="message" />
                <NavElem title="Профиль" link="/profile" iconname="account" />
                <NavElem title="Настройки" link="/settings" iconname="settings" />
            </div>
        </div>
    )
}

export default Sidebar;