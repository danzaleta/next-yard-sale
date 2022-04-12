import React from 'react';
import Head from 'next/head';
//import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <div className={styles.Checkout}>
                <div className={styles['Checkout-container']}>
                    <h1 className={styles.title}>My order</h1>
                    <div className={styles['Checkout-content']}>
                        <div className={styles.order}>
                            <p>
                                <span>03.25.22</span>
                                <span>6 aticles</span>
                            </p>
                            <p>$560.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
