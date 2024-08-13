'use client';
import React from 'react';
import Image from "next/image";
import { FaInstagram, FaFacebookSquare, FaTwitter, FaPinterestSquare } from "react-icons/fa";
import styles from './../styles/footer.module.css';


const Footer = () => {
    return (
        <main className={styles.footerMain}>
            <div className={styles.footerTop}>
                <Image src='/footer.png' alt='footer' width={2080} height={740} className={styles.footerImage}/>
                <div className={styles.inputContainer}>
                    <h1>Subscribe to our Newsletter</h1>
                    <div className={styles.subscribeContainer}>
                        <input type="email" placeholder="Your Email Address" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className={styles.contactSection}>
                <div className={styles.contactSectionItemLeft}>
                    <div>
                        <h1>Contact Us</h1>
                    </div>
                    <div>
                        <h2>Email</h2>
                        <p>needhelp@Organia.com</p>
                    </div>
                    <div>
                        <h2>Phone</h2>
                        <p>666 888 888</p>
                    </div>
                    <div>
                        <h2>Address</h2>
                        <p>88 road, borklyn street, USA</p>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.logo}>
                        <Image src="/logo.png" alt="Logo" width={199} height={54}/>
                    </div>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing.</p>
                    <div className={styles.socialIcons}>
                        <FaInstagram />
                        <FaFacebookSquare />
                        <FaTwitter />
                        <FaPinterestSquare />
                    </div>
            </div>
                <div className={styles.contactSectionItemRight}>
                    <div>
                    <h1>Utility Pages</h1>
                </div>
                    <div>
                        <p>Style Guide</p>
                    </div>
                    <div>
                        <p>404 Not Found</p>
                    </div>
                    <div>
                        <p>Password Protected</p>
                    </div>
                    <div>
                        <p>Licences</p>
                    </div>
                    <div>
                        <p>Changelog</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Footer;


