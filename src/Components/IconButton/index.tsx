import React from "react";
import styles from "./index.module.scss";
import Icon from "../Icon";

interface IIconButton {
    imageName?: string,
    onClick?: () => void,
    size?: string,
    color?: string,
    style?: string,
    svg?: boolean,
    svgName?: string,
    iconColor?: string
}

const IconButton = (props: IIconButton) => {
    const {
        imageName = '',
        onClick = () => { },
        size = '',
        color = '',
        style = '',
        svg = false,
        svgName = '',
        iconColor = ''
    } = props

    return (
        <button className={`${styles.icon_button} ${styles[size]} ${styles[color]} ${styles[style]}`} onClick={onClick}>
            {
                svg ?
                    <Icon
                        name={svgName}
                        className={`${styles.button_icon} ${styles[iconColor]}`}
                    />
                    :
                    <img
                        className={styles.button_image}
                        src={`./assets/images/${imageName}.png`}
                        alt="icon"
                    />
            }
        </button>
    )
}

export default IconButton;