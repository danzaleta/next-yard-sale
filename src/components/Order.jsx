import React from 'react';
import '@styles/Order.scss';

import arrow from '@icons/flechita.svg';

const Order = () => {
    return (
        <div className="Order">
            <p>
                <span>03.25.22</span>
                <span>6 aticles</span>
            </p>
            <p>
                $560.00
            </p>
            <img src={arrow} alt="arrow" />
        </div>
    );
}

export default Order;