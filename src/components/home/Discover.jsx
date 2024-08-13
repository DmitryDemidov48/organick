// components/Discover.js
import React from 'react';
import { discoverItems } from './../data/discoverItems';
import DiscoverCard from "@/components/DiscoverCard";
import styles from './../../styles/module/home/discover.module.css';
import {AiOutlineArrowRight} from "react-icons/ai";

const Discover = () => {
    const firstThreeMembers = discoverItems.slice(0, 2);
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <p className={styles.news}>News</p>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Discover weekly content about organic food, & more</h1>
                    <div className={styles.buttonContainerNatural}>
                        <button className={styles.buttonNatural}>
                            Explore Now
                            <AiOutlineArrowRight className={styles.arrowIcon} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                {firstThreeMembers.map((item, index) => (
                    <DiscoverCard
                        key={index}
                        image={item.image}
                        date={item.date}
                        author={item.author}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </main>
    );
};

export default Discover;
