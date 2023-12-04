import React from "react";
import styles from "./index.module.scss";
import Icon from "../Icon";

interface IIconButton {
    imageName: string,
    onClick?: () => void,
    size?: string,
    color?: string,
    style?: string
}

const IconButton = (props: IIconButton) => {
    const {
        imageName = '',
        onClick = () => { },
        size = '',
        color = '',
        style = ''
    } = props

    return (
        <button className={`${styles.icon_button} ${styles[size]} ${styles[color]} ${styles[style]}`} onClick={onClick}>
            <img
                className={styles.button_icon}
                src={`./assets/images/${imageName}.png`}
                alt="icon"
            />
        </button>
    )
}

export default IconButton;