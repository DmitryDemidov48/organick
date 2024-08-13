// components/TeamMemberCard.js
import React from 'react';
import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from './../styles/module/about/team.module.css';

const TeamMemberCard = ({ name, role, image, social }) => {
    return (
        <div className={styles.teamMember}>
            <Image src={image} alt={name} width={449} height={485} />
            <div className={styles.teamMemberInfo}>
                <div className={styles.textContainer}>
                    <h2>{name}</h2>
                    <p>{role}</p>
                </div>
                <div className={styles.socialIcons}>
                    <a href={social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
                    <a href={social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href={social.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;
