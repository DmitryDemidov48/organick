// components/Team.js
import React from 'react';
import styles from './../../styles/module/about/team.module.css';
import { teamMembers } from './../data/teamMembers';
import TeamMemberCard from "@/components/TeamMemberCard";

const Team = () => {
    const firstThreeMembers = teamMembers.slice(0, 3);

    return (
        <main className={styles.main}>
            <div className={styles.headerContainer}>
                <p>Team</p>
                <h1>Our Organic Experts</h1>
                <h4>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley.</h4>
            </div>
            <div className={styles.teamContainer}>
                {firstThreeMembers.map((member, index) => (
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
    );
};

export default Team;
