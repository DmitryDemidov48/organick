'use client'
import React from 'react';
import Image from "next/image";
import styles from './../../styles/module/about/choose.module.css';
import BorderedImage from "@/components/BorderImage";

const Choose = () => {
    return (
        <main className={styles.main}>
            <div className={styles.containerMain}>
            <div className={styles.mainImage}>
                <BorderedImage src='/choose.png' alt='choose' width={600} height={579} />
            </div>
            <div>
                <div>
                    <p className={styles.mainTitle}>Why Choose us?</p>
                    <h1 className={styles.mainTitleHeading}>We do not buy from the
                        open market & traders.</h1>
                </div>
                <div>
                    <p className={styles.description}>Simply dummy text of the printing and typesetting industry.
                        Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                </div>
                <div className={styles.advantages}>
                    <div className={styles.advantageItem}>
                        <Image className={styles.advantageIcon} src='/chooseIcon.png' alt='chooseIcon' width={19} height={19} />
                        <h4 className={styles.advantageTitle}>100% Natural Product</h4>
                    </div>
                    <p className={styles.advantageDescription}>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                    <div className={styles.advantageItem}>
                        <Image className={styles.advantageIcon} src='/chooseIcon.png' alt='chooseIcon' width={19} height={19} />
                        <h4 className={styles.advantageTitle}>Increases resistance</h4>
                    </div>
                    <p className={styles.advantageDescription}>Filling, and temptingly healthy, our Biona
                        Organic Granola with Wild Berries is just the thing</p>
                </div>
            </div>
            </div>
            <div className={styles.additionalInfo}>
                <div className={styles.infoItem}>
                    <Image src='/choos1.png' alt='chooseIcon' width={46} height={50} />
                    <h3 className={styles.infoTitle}>Return Policy</h3>
                    <p className={styles.infoDescription}>Simply dummy text of the printintypesetting industry.</p>
                </div>
                <div className={styles.infoItem}>
                    <Image src='/choos2.png' alt='chooseIcon' width={46} height={50} />
                    <h3 className={styles.infoTitle}>100% Fresh</h3>
                    <p className={styles.infoDescription}>Simply dummy text of the printintypesetting industry.</p>
                </div>
                <div className={styles.infoItem}>
                    <Image src='/choos3.png' alt='chooseIcon' width={46} height={50} />
                    <h3 className={styles.infoTitle}>Support 24/7</h3>
                    <p className={styles.infoDescription}>Simply dummy text of the printintypesetting industry.</p>
                </div>
                <div className={styles.infoItem}>
                    <Image src='/choos4.png' alt='chooseIcon' width={46} height={50} />
                    <h3 className={styles.infoTitle}>Secured Payment</h3>
                    <p className={styles.infoDescription}>Simply dummy text of the printintypesetting industry.</p>
                </div>
            </div>
        </main>
    );
};

export default Choose;
