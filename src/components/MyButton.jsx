'use client';
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from './../styles/myButton.module.css';

const Button = ({ text, icon: Icon = AiOutlineArrowRight, bgColor = "#EFD372", textColor = "#274C5B", hoverBgColor = "#e8c138", iconBgColor = "#274C5B", iconColor = "#fff", onClick }) => {
    return (
        <div className={styles.buttonContainer}>
            <button
                className={styles.button}
                style={{ backgroundColor: bgColor, color: textColor }}
                onClick={onClick}
            >
                {text}
                {Icon && (
                    <Icon
                        className={styles.arrowIcon}
                        style={{
                            backgroundColor: iconBgColor,
                            color: iconColor
                        }}
                    />
                )}
            </button>
        </div>
    );
};

export default Button;
