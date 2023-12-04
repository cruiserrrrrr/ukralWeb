import React from "react";
import styles from "./index.module.scss";
import Icon from "../Icon";

interface ICustomInput {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    placeholder?: string,
    type?: string,
    style?: string
    size?: string,
    iconName?: string
}

const CustomInput = (props: ICustomInput) => {
    const {
        onChange = () => { },
        value = '',
        placeholder = '',
        type = '',
        style = '',
        size = '',
        iconName = ''
    } = props

    return (
        <div className={`${styles.custom_input__wrapper} ${styles[style]} ${styles[size]}`}>
            {!!iconName ?
                <Icon name={iconName} />
                :
                <></>
            }
            <input
                className={`${styles.custom_input}`}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                type={type}
            />
        </div>
    )
}

export default CustomInput;