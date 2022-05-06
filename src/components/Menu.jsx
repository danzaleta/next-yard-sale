import React from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.Menu}>
            <ul className={styles.categories}>
                <li>
                    <p>
                        CATEGORIES
                    </p>
                </li>
                <li>
                    <Link href="/">All</Link>
                </li>
                <li>
                    <Link href="/">Clothes</Link>
                </li>
                <li>
                    <Link href="/">Electronics</Link>
                </li>
                <li>
                    <Link href="/">Furnitures</Link>
                </li>
                <li>
                    <Link href="/">Toys</Link>
                </li>
                <li>
                    <Link href="/">Others</Link>
                </li>
            </ul>

            <ul className={styles.user}>
                <li>
                    <Link href="/orders">My orders</Link>
                </li>
                <li>
                    <Link href="/account">My account</Link>
                </li>
            </ul>

            <ul className={styles['sign-out']}>
                <li>
                    <p className={styles.email}>user@email.com</p>
                </li>
                <li>
                    <Link href="/login">
                        Sign out
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;