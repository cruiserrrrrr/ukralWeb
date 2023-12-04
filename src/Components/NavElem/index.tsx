import React from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";

interface INavElem {
    title: string;
    link: string;
    iconname?: string;
}

const NavElem = (props: INavElem) => {

    const { title = '', link = '', iconname = '' } = props;
    return (
        <NavLink title={title} end className={({ isActive }) => isActive ? styles.active_link : styles.link} to={link}>
            <Icon name={iconname} />
            <p>{title}</p>
        </NavLink>
    )
}

export default NavElem;