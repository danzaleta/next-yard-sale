import { useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { orders } = useContext(AppContext);
  const router = useRouter();
  const currentOrder = orders[parseInt(router.query?.index)];

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = currentOrder?.products?.reduce(reducer, 0);
    return sum;
  };

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
                <span>{currentOrder?.date}</span>
                <span>{currentOrder?.products?.length} aticles</span>
              </p>
              <p>USD {formatter.format(sumTotal())}</p>
            </div>
            {currentOrder?.products.map((product, index) => (
              <OrderItem product={product} indexValue={index} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
