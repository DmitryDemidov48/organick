'use client'
import React from 'react';
import Image from 'next/image';
import styles from './../../styles/module/project/project.module.css';

const Project = () => {
    return (
        <main className={styles.projectContainer}>
            <div className={styles.section}>
                <h1 className={styles.sectionTitle}>About The Farm:</h1>
                <p className={styles.sectionText}>
                    It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using "Content here, content here",
                    making it look like readable English.
                </p>
                <p className={styles.sectionText}>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and uncover
                    many websites still in their infancy. Various versions have evolved over the years.
                </p>
            </div>
            <div className={styles.imageSection}>
                <Image src='/proj1.png' alt='project' width={964} height={642} className={styles.projectImage} />
                <p className={styles.imageCaption}>The Organic Products</p>
            </div>
            <div className={styles.section}>
                <h1 className={styles.sectionTitle}>How To Farm:</h1>
                <p className={styles.sectionText}>
                    It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using "Content here, content here",
                    making it look like readable English.
                </p>
                <p className={styles.sectionText}>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and uncover
                    many websites still in their infancy. Various versions have evolved over the years.
                </p>
            </div>
            <div className={styles.section}>
                <h1 className={styles.sectionTitle}>Conclusion:</h1>
                <p className={styles.sectionText}>
                    It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using "Content here, content here",
                    making it look like readable English.
                </p>
                <p className={styles.sectionText}>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and uncover
                    many websites still in their infancy. Various versions have evolved over the years.
                </p>
            </div>
        </main>
    );
};

export default Project;
