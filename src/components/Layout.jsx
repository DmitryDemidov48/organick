'use client'
import React from 'react';
import styles from "../styles/page.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
};

export default Layout;
