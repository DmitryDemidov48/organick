'use client'
import React from 'react';
import Image from "next/image";
import styles from './../../styles/module/home/organic.module.css';

const Organic = () => {
    return (
            <main className={styles.main}>
                <div className={styles.item}>
                    <Image src='/org1.png' alt='org1' width={200} height={200} />
                    <div className={styles.textContainer}>
                        <h2>Organic Juice</h2>
                    </div>
                </div>
                <div className={styles.item}>
                    <Image src='/org2.png' alt='org2' width={200} height={200} />
                    <div className={styles.textContainer}>
                        <h2>Organic Food</h2>
                    </div>
                </div>
                <div className={styles.item}>
                    <Image src='/org3.png' alt='org3' width={200} height={200} />
                    <div className={styles.textContainer}>
                        <h2>Organic Food</h2>
                    </div>
                </div>
            </main>
    );
};

export default Organic;
