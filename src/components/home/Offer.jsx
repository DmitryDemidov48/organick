'use client'
import React from 'react';
import styles from '../../styles/module/home/offer.module.css';
import BorderedImage from "@/components/BorderImage";

const MainSection = () => {
    return (
        <main className={styles.mainContainerOffer}>
            <div className={styles.imageContainerOffer}>
                <BorderedImage src='/1.png' alt='natural' width={682} height={367} />
                <div className={styles.textContainerOffer}>
                    <p className={styles.paragraphOffer}>Natural!!</p>
                    <h1 className={styles.headingOffer}>Get Garden Fresh Fruits</h1>
                </div>
            </div>
            <div className={styles.imageContainerOffer}>
                <BorderedImage src='/2.png' alt='offer' width={682} height={367} />
                <div className={styles.textContainerOffer}>
                    <p className={styles.paragraphOffer}>Offer</p>
                    <h1 className={styles.headingOffer}>Get 10% off on Vegetables</h1>
                </div>
            </div>
        </main>
    );
};

export default MainSection;
