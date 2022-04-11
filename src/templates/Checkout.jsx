import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';

const Checkout = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-container">
                <h1 className="title">
                    My order
                </h1>
                <div className="Checkout-content">
                    <div className="order">
                        <p>
                            <span>03.25.22</span>
                            <span>6 aticles</span>
                        </p>
                        <p>
                            $560.00
                        </p>
                    </div>
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>
        </div>
    );
}

export default Checkout;