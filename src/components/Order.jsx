import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/Order.module.scss';
import arrow from '@icons/flechita.svg';

const Order = ({order, indexValue}) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = order.products.reduce(reducer, 0);
        return sum;
    };

    return (
        <div className={styles.Order}>
            <p>
                <span>{order.date}</span>
                <span>{order.products.length} aticles</span>
            </p>
            <p>USD {formatter.format(sumTotal())}</p>
            <Link href={{ pathname: '/checkout', query: { index: indexValue } }} passHref>
                <Image src={arrow} alt="arrow" />
            </Link>
        </div>
    );
};

export default Order;
