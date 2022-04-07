import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext'
import arrow from '@icons/flechita.svg'
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
    const { state } = useContext(AppContext);
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <aside className={styles.MyOrder}>
            <div className="title-container">
                <img src={arrow} alt="arrow" />
                <p>Shopping cart</p>
            </div>
            <div className="my-order-content">
                {state.cart.map((product, index) => (
                    <OrderItem indexValue={index} product={product} key={index}/>))}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>
                        ${sumTotal()}
                    </p>
                </div>
            </div>
            <button className="primary-button">Checkout</button>
        </aside>
    );
}

export default MyOrder;