'use client';

import React from 'react';
import Image from 'next/image';
import styles from './../../styles/module/home/econis.module.css';

const Econis = () => {
    return (
        <div className={styles.econisContainer}>
        <div className={styles.main}>
            <div className={styles.imageContainer}>
                <Image src='/econis.png' alt='econis' width={993} height={1490} className={styles.image} />
            </div>

            <div className={styles.textContainer}>
                <div className={styles.infoContainerItem}>
                <div className={styles.header}>
                    <p>Eco Friendly</p>
                    <h1>Econis is a Friendly Organic Store</h1>
                </div>
                <div className={styles.infoContainer}>

                    <div className={styles.infoItem}>
                        <h2>Start with Our Company First</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h2>Learn How to Grow Yourself</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h2>Farming Strategies of Today</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Econis;
