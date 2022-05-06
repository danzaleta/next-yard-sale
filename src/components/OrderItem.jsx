import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product, indexValue }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    const { removeFromCart } = useContext(AppContext);

    const handleRemove = index => {
        removeFromCart(index);
    };

    return (
        <div className={styles.OrderItem}>
            <figure>
                {product?.images[0] && <Image src={product?.images[0]} alt={product?.title} width={70} height={70}/>}
            </figure>
            <p>{product?.title}</p>
            <p>USD {formatter.format(product.price)}</p>
            <Image src={close} alt='close' onClick={() => handleRemove(indexValue)} />
        </div>
    );
};

export default OrderItem;