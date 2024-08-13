'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart, AiOutlineDown, AiOutlineUp } from "react-icons/ai"; // Импортируем иконки
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={199}
                    height={54}
                    className={styles.logoImage}
                />
            </div>
            <nav className={styles.menu}>
                <Link href="/" className={styles.menuLink} onClick={closeDropdown}>Home</Link>
                <Link href="/about" className={styles.menuLink} onClick={closeDropdown}>About</Link>
                <div className={styles.menuItemWithDropdown}>
                    <div onClick={toggleDropdown} className={styles.menuLink} style={{ cursor: 'pointer' }}>
                        Pages {isDropdownOpen ? <AiOutlineUp /> : <AiOutlineDown />}
                    </div>
                    {isDropdownOpen && (
                        <ul className={styles.dropdownMenu}>
                            <li className={styles.dropdownMenuItem}>
                                <Link href="/pages/team" className={styles.dropdownMenuLink} onClick={closeDropdown}>
                                   Team
                                </Link>
                            </li>
                            <li className={styles.dropdownMenuItem}>
                                <Link href="/pages/blog" className={styles.dropdownMenuLink} onClick={closeDropdown}>
                                   Blog
                                </Link>
                            </li>
                            <li className={styles.dropdownMenuItem}>
                                <Link href="/pages/services" className={styles.dropdownMenuLink} onClick={closeDropdown}>
                                    Services
                                </Link>
                            </li>
                            <li className={styles.dropdownMenuItem}>
                                <Link href="/pages/quality" className={styles.dropdownMenuLink} onClick={closeDropdown}>
                                    Quality Standard
                                </Link>
                            </li>
                            <li className={styles.dropdownMenuItem}>
                                <Link href="/pages/contact" className={styles.dropdownMenuLink} onClick={closeDropdown}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <Link href="/shop" className={styles.menuLink} onClick={closeDropdown}>Shop</Link>
                <Link href="/project" className={styles.menuLink} onClick={closeDropdown}>Project</Link>
                <Link href="/news" className={styles.menuLink} onClick={closeDropdown}>News</Link>
            </nav>
            <div className={styles.actions}>
                <div className={styles.searchWrapper}>
                    <input type="text" placeholder="Search..." className={styles.searchInput} />
                    <div className={styles.searchIcon}>
                        <CiSearch width={16} height={16} />
                    </div>
                </div>
                <div className={styles.basket}>
                    <div className={styles.basketIcon}>
                        <Link href="/basket" className={styles.basketIcon}><AiOutlineShoppingCart/></Link>
                    </div>
                    <div className={styles.cart}>
                        <div className={styles.cartLabel}>Cart</div>
                        <div className={styles.cartCount}>(0)</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
