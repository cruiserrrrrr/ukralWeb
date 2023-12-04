import React from "react";
import styles from "./index.module.scss";

interface IButton {
    onClick?: () => void;
    color?: string;
    text?: string;
    size?: string;
    disabled?: boolean;

}

const Button = (props: IButton) => {
    const {
        onClick = () => { },
        color = '',
        text = '',
        size = '',
        disabled = false
    } = props
    return (
        <button className={`${styles.button} ${styles[color]} ${styles[size]}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;