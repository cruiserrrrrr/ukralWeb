import React from "react";
import styles from "./index.module.scss";
import CustomInput from "../../Components/CustomInput";
import Button from "../../Components/Button";
import Icon from "../../Components/Icon";
import IconButton from "../../Components/IconButton";


const LoginPage = () => {

    const loginMethodList = ['googleIcon', 'githubIcon', 'microsoft']

    return (
        <div className={styles.login_wrapper}>
            <div className={styles.login_container}>
                <h1 className={styles.login_title}>Авторизация</h1>
                <p className={styles.login_subtitle}>Войти с пощью</p>
                <div className={styles.login_social}>
                    {loginMethodList.map((icon, index) => (
                        <IconButton
                            key={index}
                            imageName={icon}
                        />
                    ))}
                </div>
                <form className={styles.login_form}>
                    <CustomInput
                        placeholder="E-mail"
                        type="email"
                        iconName="email"
                        style="border_raius"
                        size="medium"
                    />
                    <CustomInput
                        placeholder="Password"
                        type="password"
                        iconName="password"
                        style="border_raius"
                        size="medium"
                    />
                    <Button
                        text="Войти"
                        color="blue"
                        size="medium"
                        onClick={() => console.log('login')}
                    />
                </form>
            </div>
        </div>
    )
}

export default LoginPage;