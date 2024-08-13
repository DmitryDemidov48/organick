'use client'
import React from 'react';
import Image from "next/image";
import styles from './../../../styles/module/quality/quality.module.css';

const Page = () => {
    return (
        <main className={styles.main}>
            <div className={styles.mainImage}>
                <Image src='/Bstandart.png' alt='standart' width={1440} height={720} layout="responsive"/>
            </div>
            <div className={styles.contentSection}>
                <h1>Organic Store Services</h1>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it
                    has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English.</p>

                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                 </div>
            <div className={styles.imageTextSection}>
                <div className={styles.imageBlock}>
                    <Image src='/standart1.png' alt='image' width={379} height={252}/>
                    <div className={styles.textBlock}>
                        <h3>Why Organic</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                    </div>
                </div>
                <div className={styles.imageBlock}>
                    <div className={styles.textBlock}>
                        <h3>Speciality Produce</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover..</p>
                    </div>
                    <Image src='/standart2.png' alt='image' width={379} height={252}/>
                </div>
            </div>
            <div className={styles.largeTextSection}>
                <h1>We farm your land</h1>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it
                    has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English.</p>
            </div>
            <div className={styles.benefitsSection}>
                <div className={styles.benefitItem}>
                    <div>1</div>
                    <h1>Best quality support</h1>
                </div>
                <div className={styles.benefitItem}>
                    <div>2</div>
                    <h1>Money back guarantee</h1>
                </div>
            </div>
        </main>
    );
};

export default Page;
