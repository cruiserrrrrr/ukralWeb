import React, { useState, useRef } from "react";
import styles from "./index.module.scss";
import CustomInput from "../CustomInput";
import IconButton from "../IconButton";
import Button from "../Button";

const AddPost = () => {

    const textAreaRef = useRef(null)
    const [text, setText] = useState<string>('');


    const autoResize = () => {
        const textarea = textAreaRef.current;
        if (textarea.value) {
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    };

    const resetHeight = () => {
        const textarea = textAreaRef.current;
        if (!textarea.value) {
            textarea.style.height = '';
        }
    };

    return (
        <div className={styles.add_post}>
            <div className={styles.add_post__container}>
                <div className={styles.add_post__form}>
                    <textarea
                        ref={textAreaRef}
                        placeholder="Напишите что-нибудь"
                        className={styles.textarea}
                        defaultValue={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={autoResize}
                        onKeyUp={resetHeight}
                    />
                </div>
                <div className={styles.post_options}>
                    <div className={styles.options_container}>
                        <IconButton
                            svg={true}
                            svgName="gif"
                            iconColor={'blue'}
                        />
                        <IconButton
                            svg={true}
                            svgName="details"
                            iconColor={'blue'}
                        />
                        <IconButton
                            svg={true}
                            svgName="location"
                            iconColor={'blue'}
                        />
                    </div>
                    <Button
                        text="Опубликовать"
                        color="blue"
                        size="medium"
                    />
                </div>
            </div>
        </div>
    )
}

export default AddPost;