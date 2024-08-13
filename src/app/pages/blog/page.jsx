'use client'
import React from 'react';
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import styles from './../../../styles/module/blog/blog.module.css';

const Page = () => {
    return (
        <main className={styles.main}>
            <div className={styles.containerImage}>
            <div className={styles.imageWrapper}>
                <Image src='/dcard5.png' alt='blog' width={1440} height={720}/>
            </div>
            <div>
                <div className={styles.postInfo}>
                    <div className={styles.postTitleInfo}>
                        <div className={styles.postDate}>
                            <h3>Posted On:</h3>
                            <p>January 6, 2022</p>
                        </div>
                        <div className={styles.postAuthor}>
                            <AiOutlineUser/>
                            <p>By Rachi Card</p>
                        </div>
                    </div>
                <div className={styles.postTitle}>
                    <h1>Research More Organic Food</h1>
                    <p>Established fact that a reader will be distracted by the readable content of a page when looking a layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                </div>
                </div>
            </div>
            </div>
            <div className={styles.postContent}>
                <p>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills.
                    Uniquely enable accurate supply chains rather than friction technology.</p>
                <h1>Preferred Form of Vitamin D?</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable English.</p>
                <ul>
                    <li>Publishing packages and web pageLorem Ipsum as their default</li>
                    <li>Content here, content here', making it look like readable</li>
                    <li>Packages and web pageLorem Ipsum as their default</li>
                </ul>
                <div className={styles.quote}>
                    <h2>“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency.
                        The second is that organic applied to an inefficient operation will magnify the health.”</h2>
                </div>
                <h1>Make perfect organic product with us</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable English.</p>
                <ol>
                    <li>Publishing packages and web pageLorem Ipsum as their default</li>
                    <li>Content here, content here', making it look like readable</li>
                    <li>Packages and web pageLorem Ipsum as their default</li>
                    <li>More-or-less normal distribution of letters</li>
                </ol>
            </div>
        </main>
    );
};

export default Page;
