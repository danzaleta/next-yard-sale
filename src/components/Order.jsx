import React from 'react';
import Image from 'next/image';
import styles from'@styles/Order.module.scss';

import arrow from '@icons/flechita.svg';

const Order = () => {
    return (
        <div className={styles.Order}>
            <p>
                <span>03.25.22</span>
                <span>6 aticles</span>
            </p>
            <p>
                $560.00
            </p>
            <Image src={arrow} alt="arrow" />
        </div>
    );
};

export default Order;