
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import styles from '../styles/product.module.css';

const ProductCard = ({ product }) => {
    const darkenColor = (color) => {
        let colorValue = parseInt(color.replace('#', ''), 16);
        colorValue = Math.max(0, colorValue - 0x333333);
        return `#${colorValue.toString(16).padStart(6, '0')}`;
    };

    return (
        <div className={styles.productCardProduct}>
            <div className={styles.productCardItemProduct}>
                <Image
                    src={product.img}
                    alt={product.name}
                    className={styles.productImageProduct}
                    width={200}
                    height={200}
                />
                <p className={styles.productCategoryProduct}>{product.name}</p>
                <p className={styles.productPriceProduct}>{product.price}</p>
                <p className={styles.productSaleProduct}>{product.sale}</p>
                <div className={styles.starsContainerProduct}>
                    {[...Array(5)].map((_, i) => (
                        <div className={styles.starIconProduct} key={i}>
                            <FaStar />
                        </div>
                    ))}
                </div>
            </div>
            <button
                className={styles.buttonProduct}
                style={{
                    backgroundColor: product.buttonColor,
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = darkenColor(product.buttonColor)}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = product.buttonColor}
            >
                {product.buttonName}
            </button>
        </div>
    );
};

export default ProductCard;
