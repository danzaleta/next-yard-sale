import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    const { state, toggleOrders, setToggleOrders } = useContext(AppContext);
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <aside className={styles.MyOrder}>
            <div className={styles['title-container']}>
                <Image src={arrow} alt="arrow"
                    onClick={() => setToggleOrders(!toggleOrders)}
                    onKeyPress={() => setToggleOrders(!toggleOrders)}
                    aria-hidden="true" />
                <p>Shopping cart</p>
            </div>
            <div className={styles['my-order-content']}>
                {state.cart.map((product, index) => (
                    <OrderItem indexValue={index} product={product} key={index} />))}
            </div>
            <div>
                <div className={styles.order}>
                    <p>
                        <span>Total</span>
                    </p>
                    <p>
                        USD {formatter.format(sumTotal())}
                    </p>
                </div>
                <Link href='/checkout' passHref>
                    <button className={styles['primary-button']}>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    );
};

export default MyOrder;