'use client';

import React from 'react';
import Image from 'next/image';
import Project from '@/components/project/Project';
import styles from './../../styles/module/project/project.module.css';

const Page = () => {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.containerImage}>
                <Image src='/project.png' alt='project' width={1440} height={450} className={styles.projectImage} />
                <div className={styles.textOverlay}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.projectTitle}>Black Raspberry</h1>
                        <p className={styles.projectDescription}>
                            Established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
                        </p>
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.detailItem}>
                            <h2 className={styles.detailTitle}>Date</h2>
                            <p className={styles.detailValue}>December 4, 2022</p>
                        </div>
                        <div className={styles.detailItem}>
                            <h2 className={styles.detailTitle}>Category </h2>
                            <p className={styles.detailValue}>Agriculture, Eco</p>
                        </div>
                        <div className={styles.detailItem}>
                            <h2 className={styles.detailTitle}>Client</h2>
                            <p className={styles.detailValue}>Kevin Martin</p>
                        </div>
                        <div className={styles.detailItem}>
                            <h2 className={styles.detailTitle}>Service</h2>
                            <p className={styles.detailValue}>Organic Products</p>
                        </div>

                    </div>
                </div>
            </div>
            <Project />
        </main>
    );
};

export default Page;
