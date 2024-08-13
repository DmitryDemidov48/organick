import React from 'react';
import Image from "next/image";
import styles from "@/styles/module/home/discover.module.css";
import {AiOutlineArrowRight} from "react-icons/ai";
import DiscoverCard from "@/components/DiscoverCard";
import {discoverItems} from "@/components/data/discoverItems";

const Page = () => {
    return (
        <main>
            <div>
                <Image src='/Bnews.png' alt='news' width={1440} height={450}/>
            </div>
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
                    {discoverItems.map((item, index) => (
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
        </main>
    );
};

export default Page;