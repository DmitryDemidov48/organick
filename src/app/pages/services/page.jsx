'use client';
import React from 'react';
import Image from "next/image";
import styles from './../../../styles/module/services/services.module.css';

const Page = () => {
    return (
        <main className={styles.servicesContainer}>
            <div className={styles.mainImage}>
                <Image src='/services.png' alt='services' width={1440} height={450}/>
            </div>

                <div className={styles.sectionHeader}>
                    <p>What we Grow</p>
                    <h1>Better Agriculture for Better Future</h1>
                </div>
            <div className={styles.infoContainer}>
                <div className={styles.serviceCards}>
                    <div className={styles.serviceCard}>
                        <div>
                            <Image src='/licon1.png' alt='icon' width={61} height={62}/>
                        </div>
                        <h1>Dairy Products</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.
                            Sed ut perspiciatis</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div>
                            <Image src='/licon2.png' alt='icon' width={61} height={62}/>
                        </div>
                        <h1>Store Services</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.
                            Sed ut perspiciatis</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div>
                            <Image src='/licon3.png' alt='icon' width={61} height={62}/>
                        </div>
                        <h1>Delivery Services</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.
                            Sed ut perspiciatis</p>
                    </div>
                </div>
                <div className={styles.serviceImage}>
                    <Image src='/services1.png' alt='imageServices' width={743} height={990} />
                </div>
                    <div className={styles.serviceCards}>
                        <div className={styles.serviceCard}>
                            <div>
                                <Image src='/ricon1.png' alt='icon' width={61} height={62}/>
                            </div>
                            <h1>Agricultural Services</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.
                                Sed ut perspiciatis</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div>
                                <Image src='/ricon2.png' alt='icon' width={61} height={62}/>
                            </div>
                            <h1>Organic Products</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.
                                Sed ut perspiciatis</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div>
                                <Image src='/ricon3.png' alt='icon' width={61} height={62}/>
                            </div>
                            <h1>Fresh Vegetables</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.
                                Sed ut perspiciatis</p>
                        </div>
                    </div>
            </div>
        </main>
    );
};

export default Page;
