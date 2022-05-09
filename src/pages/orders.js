import {useContext} from 'react';
import AppContext from '@context/AppContext';
import Order from '@components/Order';
import styles from '@styles/Orders.module.scss';

const Orders = () => {
  const {orders} = useContext(AppContext);

  return (
    <div className={styles.Orders}>
      <div className={styles['Orders-container']}>
        <h1 className={styles.title}>My orders</h1>
        <div className={styles['Orders-content']}>
          {orders.map((order, index)=>(
          <Order order={order} indexValue={index} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
