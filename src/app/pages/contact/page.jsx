import React from 'react';
import Image from "next/image";
import styles from "../../../styles/module/contact/contact.module.css";
import {AiOutlineArrowRight} from "react-icons/ai";

const Page = () => {
    return (
        <main>
            <div className={styles.containerImage}>
                <Image src='/Bnews.png' alt='news' width={1440} height={450}/>
            </div>
            <div className={styles.imageContainerContact}>
                <div>
                    <Image src="/contact.png" alt="img" width={624} height={780} />
                </div>
                <div className={styles.textContainerContact}>
                    <h1 className={styles.headingContact}>We'd love to talk about how we can work together.</h1>
                    <p className={styles.paragraphItemContact}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                    <div className={styles.infoContainerContact}>
                        <div className={styles.iconTextContainerContact}>
                            <div className={styles.iconContainerContact}>
                                <Image src='/iconC1.png' width={80} height={80} alt="Icon 1" />
                            </div>
                            <div>
                                <h1 className={styles.iconHeadingContact}>Massege</h1>
                                <p className={styles.iconTextContact}>support@organic.com</p>
                            </div>
                        </div>
                        <div className={styles.iconTextContainerContact}>
                            <div className={styles.iconContainerContact}>
                                <Image src='/IocnC2.png' width={80} height={80} alt="Icon 2" />
                            </div>
                            <div>
                                <h1 className={styles.iconHeadingContact}>Contact Us</h1>
                                <p className={styles.iconTextContact}>+01 123 456 789</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonContainerContact}>
                        <button className={styles.buttonContact}>
                            Explore Now
                            <AiOutlineArrowRight className={styles.arrowIcon} />
                        </button>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Page;