'use client'
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/module/home/aboutUs.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const AboutUs = () => {
    return (
        <main className={styles.mainContainerAbout}>
            <div className={styles.imageContainerAbout}>
                <Image src="/aboutUsHome.png" alt="Healthy Food" width={1440} height={698} />
                <div className={styles.textContainerAbout}>
                    <p className={styles.paragraphAbout}>About Us</p>
                    <h1 className={styles.headingAbout}>We Believe in Working Accredited Farmers</h1>
                    <p className={styles.paragraphItemAbout}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                    <div className={styles.infoContainerAbout}>
                        <div className={styles.iconTextContainerAbout}>
                            <div className={styles.iconContainerAbout}>
                                <Image src='/icon.png' width={101} height={101} alt="Icon 1" />
                            </div>
                            <div>
                                <h1 className={styles.iconHeadingAbout}>Organic Foods Only</h1>
                                <p className={styles.iconTextAbout}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className={styles.iconTextContainerAbout}>
                            <div className={styles.iconContainerAbout}>
                                <Image src='/icon-2.png' width={101} height={101} alt="Icon 2" />
                            </div>
                            <div>
                                <h1 className={styles.iconHeadingAbout}>Quality Standards</h1>
                                <p className={styles.iconTextAbout}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonContainerAbout}>
                        <button className={styles.buttonAbout}>
                            Explore Now
                            <AiOutlineArrowRight className={styles.arrowIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;
