'use client'
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import styles from '../../styles/module/home/testimonial.module.css';

const Testimonial = () => {
    return (
        <main className={styles.main}>
            <div className={styles.imageContainer}>
            <Image src='/testimon.png' alt='Testimonial Background'  width={1440} height={698} />
            <div className={styles.header}>
                <p className={styles.paragraph}>Testimonial</p>
                <h1 className={styles.heading}>What Our Customer Saying?</h1>
                <div className={styles.testimonial}>
                    <div className={styles.userInfo}>
                        <Image src='/user.png' alt='user' width={115} height={115} />

                    </div>
                    <div className={styles.stars}>
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} color="#FFD700" />
                        ))}
                    </div>
                    <p className={styles.text}>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
                </div>
                <div className={styles.stats}>
                    <div>
                        <h1>100%</h1>
                        <p>Organic</p>
                    </div>
                    <div>
                        <h1>285</h1>
                        <p>Active Product</p>
                    </div>
                    <div>
                        <h1>350+</h1>
                        <p>Organic Orchards</p>
                    </div>
                    <div>
                        <h1>25+</h1>
                        <p>Years of Farming</p>
                    </div>
                </div>
            </div>
            </div>
        </main>
    );
};

export default Testimonial;
