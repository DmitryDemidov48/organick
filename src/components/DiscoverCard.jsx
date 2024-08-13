
import React from 'react';
import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineUser } from "react-icons/ai";
import styles from './../styles/module/home/discover.module.css';

const DiscoverCard = ({ image, date, author, title, description }) => {
    return (
        <div className={styles.card}>
            <Image src={image} alt={title} width={200} height={200} className={styles.image}/>
            <div className={styles.dateContainer}>
                <h2 className={styles.date}>{date.split(' ')[0]}</h2>
                <h2 className={styles.date}>{date.split(' ')[1]}</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.authorContainer}>
                    <AiOutlineUser className={styles.icon}/>
                    <p className={styles.author}>By {author}</p>
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.subtitle}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
                <div className={styles.buttonContainerNatural}>
                    <button className={styles.buttonDiscover}>
                        Read More
                        <AiOutlineArrowRight className={styles.arrowIcon} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiscoverCard;
