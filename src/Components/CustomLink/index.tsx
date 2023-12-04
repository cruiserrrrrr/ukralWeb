import React from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

interface ICustomLink {
    text: string,
    to: string
}
const CustomLink = (props: ICustomLink) => {
    const { text = '', to = '' } = props;

    return(
        <NavLink className={styles.custom_link} to={to}>
            <p>{text}</p>
        </NavLink>
    )
}

export default CustomLink;