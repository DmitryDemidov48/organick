'use client'
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/module/about/about.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const AboutUs = () => {
    return (
        <main className={styles.mainContainerAbout}>
            <div className={styles.imageContainerAbout}>
                <Image src="/aboutpage.png" alt="about" width={721} height={564} />
                <div className={styles.textContainerAbout}>
                    <p className={styles.paragraphAbout}>About Us</p>
                    <h1 className={styles.headingAbout}>We Believe in Working Accredited Farmers</h1>
                    <p className={styles.paragraphItemAbout}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                <p className={styles.paragraphItemAbout}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                    <div className={styles.infoContainerAbout}>
                        <div className={styles.iconTextContainerAbout}>
                            <div className={styles.iconContainerAbout}>
                                <Image src='/Tractor.png' width={101} height={101} alt="tractor" />
                            </div>
                            <div>
                                <h1 className={styles.iconHeadingAbout}>Modern Agriculture
                                    Equipment
                                </h1>
                                  </div>
                        </div>
                        <div className={styles.iconTextContainerAbout}>
                            <div className={styles.iconContainerAbout}>
                                <Image src='/icon-3.png' width={101} height={101} alt="Icon 3" />
                            </div>
                            <div>
                                <h1 className={styles.iconHeadingAbout}>No growth hormones are used</h1>
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
