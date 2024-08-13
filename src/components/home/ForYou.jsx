'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../../styles/module/home/forYou.module.css';
import {AiOutlineArrowRight} from "react-icons/ai";
import ProductCard from "@/components/Product";

const products = [
    {
        buttonColor: '#274C5B',
        buttonName: 'Vegetable',
        img: '/mungbean.png',
        name: 'Mung Bean',
        price: '$20.00',
        sale: '11.00',
        iconStar: <FaStar />,
    },
    {
        buttonColor: '#274C5B',
        buttonName: 'Vegetable',
        img: '/brown.png',
        name: 'Brown Hazelnut',
        price: '$20.00',
        sale: '12.00',
        iconStar: <FaStar />,
    },
    {
        buttonColor: '#274C5B',
        name: 'Onion',
        img: '/onion.png',
        buttonName: 'Vegetable',
        price: '$20.00',
        sale: '$15.00',
        iconStar: <FaStar />,
    },
    {
        buttonColor: '#274C5B',
        name: 'Cabbage',
        img: '/cabbage.png',
        buttonName: 'Vegetable',
        price: '$20.00',
        sale: '$17.00',
        iconStar: <FaStar />,
    },
];

const darkenColor = (color) => {
    let colorValue = parseInt(color.replace('#', ''), 16);
    colorValue = Math.max(0, colorValue - 0x333333);
    return `#${colorValue.toString(16).padStart(6, '0')}`;
};
const ForYou = () => {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <div>
                    <p>Offer</p>
                    <h1>We Offer Organic For You</h1>
                </div>
                    <button className={styles.buttonNatural}>
                        Explore Now
                        <AiOutlineArrowRight className={styles.arrowIcon} />
                    </button>
            </div>
            <div className={styles.productsGrid}>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </main>
    );
};

export default ForYou;
