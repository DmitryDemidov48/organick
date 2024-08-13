
import Link from 'next/link';
import Image from 'next/image';
import styles from './../styles/404.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <Image src='/404.png' alt='404 Image' width={1440} height={720} className={styles.image}/>
            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Page Not Found</h2>
                <Link className={styles.link} href="/">Return Home</Link>
            </div>
        </div>
    );
}
