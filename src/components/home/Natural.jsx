'use client'
import React from 'react';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from '../../styles/module/home/natural.module.css';

const MainSection = () => {
    return (
        <main className={styles.mainContainerNatural}>
            <div className={styles.imageContainerNatural}>
                <Image src="/image-18.png" alt="Healthy Food" width={1440} height={698} />
                <div className={styles.textContainerNatural}>
                    <p className={styles.paragraphNatural}>100% Natural Food</p>
                    <h1 className={styles.headingNatural}>Choose the best healthier way of life</h1>
                    <div className={styles.buttonContainerNatural}>
                        <button className={styles.buttonNatural}>
                            Explore Now
                            <AiOutlineArrowRight className={styles.arrowIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainSection;
