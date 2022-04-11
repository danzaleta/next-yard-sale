import React, { useContext } from 'react';
import Link from 'next/link';
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
            <div className={styles['title-container']}>
                <img src={arrow} alt="arrow" />
                <p>Shopping cart</p>
            </div>
            <div className={styles['my-order-content']}>
                {state.cart.map((product, index) => (
                    <OrderItem indexValue={index} product={product} key={index}/>))}
                <div className={styles.order}>
                    <p>
                        <span>Total</span>
                    </p>
                    <p>
                        ${sumTotal()}
                    </p>
                </div>
            </div>
            <Link className={styles['primary-button']} href='/checkout' >Checkout</Link>
        </aside>
    );
}

export default MyOrder;