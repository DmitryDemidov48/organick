'use client'

import React from 'react';
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from "@/styles/module/home/products.module.css";
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
        buttonName: 'Millets',
        img: '/nuts.png',
        name: 'White Nuts',
        price: '$20.00',
        sale: '$15.00',
        iconStar: <FaStar />,
    },
    {
        buttonColor: '#274C5B',
        buttonName: 'Vegetable',
        img: '/tomato.png',
        name: 'Vegan Red Tomato',
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


const Page = () => {
    const singleProduct = products[2];

    return (
        <main className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                <Image src='/basket.png' alt='project' width={1440} height={450} />
            </div>
            <div className={styles.productDetails}>
                <div className={styles.productImage}>
                    <Image src={singleProduct.img} alt={singleProduct.name} width={591} height={800} />
                    <div >
                        <button className={styles.productInfoButton}>
                            <p className={styles.millets}>Millets</p>
                        </button>
                    </div>
                </div>
                <div className={styles.productInfo}>

                    <div>
                        <h1>Health Pistachios</h1>
                        <div className={styles.iconStarContainer}>
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>
                        <div className={styles.priceContainer}>
                            <p>{singleProduct.sale}</p>
                            <h3>{singleProduct.price}</h3>
                        </div>
                    </div>
                    <div className={styles.productDescription}>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                    <div className={styles.quantityContainer}>
                        <h4>Quantity :</h4>
                        <p>1</p>
                        <button className={styles.productCardButton}>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className={styles.productsContainerProduct}>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </main>
    );
};

export default Page;