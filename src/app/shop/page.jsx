'use client'
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import styles from '../../styles/module/home/products.module.css';
import ProductCard from "@/components/Product";

const products = [
    {
        buttonColor: '#274C5B',
        buttonName: 'Vegetable',
        img: '/vegetable.png',
        name: 'Calabrese Broccoli',
        price: '$20.00',
        sale: '$13.00',
        iconStar: <FaStar />,
    },
    {
        buttonColor: '#274C5B',
        buttonName: 'Fresh',
        img: '/banana.png',
        name: 'Fresh Banana Fruites',
        price: '$20.00',
        sale: '$14.00',
        iconStar: <FaStar />,
    },
    {
        buttonColor: '#274C5B',
        name: 'White Nuts',
        img: '/nuts.png',
        buttonName: 'Millets',
        price: '$20.00',
        sale: '$15.00',
        iconStar: <FaStar />,
    },
    {
        buttonColor: '#274C5B',
        name: 'Vegan Red Tomato',
        img: '/tomato.png',
        buttonName: 'Vegetable',
        price: '$20.00',
        sale: '$17.00',
        iconStar: <FaStar />,
    },
    {
        buttonColor: '#274C5B',
        name: 'Mung Bean',
        img: '/mung.png',
        buttonName: 'Health',
        price: '$20.00',
        sale: '$11.00',
        iconStar: <FaStar />,
    },
    {
        buttonColor: '#274C5B',
        name: 'Brown Hazelnut',
        img: '/nuts.png',
        buttonName: 'Nuts',
        price: '$20.00',
        sale: '$13.00',
        iconStar: <FaStar />,
    },
    {
        buttonColor: '#274C5B',
        buttonName: 'Fresh',
        img: '/eggs.png',
        name: 'Eggs',
        price: '$20.00',
        sale: '$17.00',
        iconStar: <FaStar />,
    },
    {
        buttonColor: '#274C5B',
        buttonName: 'Fresh',
        img: '/zelco.png',
        name: 'Zelco Suji Elaichi Rusk',
        price: '$20.00',
        sale: '$13.00',
        iconStar: <FaStar />,
    },
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

const Products = () => {
    return (
        <main className={styles.mainContainerProduct}>
            <div>
                <Image src='/Banner.png' alt='bannerShop' width={1440} height={450}/>
            </div>
            <div className={styles.productsContainerProduct}>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </main>
    );
};

export default Products;
