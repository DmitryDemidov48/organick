'use client'
import React from 'react';
import Image from "next/image";

import {teamMembers} from "@/components/data/teamMembers";
import styles from "@/styles/module/about/team.module.css";
import TeamMemberCard from "@/components/TeamMemberCard";

const Page = () => {

    return (
        <main>
            <div>
                <Image src='/news.png' alt='news' width={1440} height={450} />
            </div>
            <main className={styles.main}>
                <div className={styles.headerContainer}>
                    <p>Team</p>
                    <h1>Our Organic Experts</h1>
                    <h4>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley.</h4>
                </div>
                <div className={styles.teamContainer}>
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            social={member.social}
                        />
                    ))}
                </div>
            </main>
        </main>
    );
};

export default Page;