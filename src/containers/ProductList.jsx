import { useContext, useEffect, useState } from 'react';
import AppContext from '@context/AppContext';
import ProductItem from '@components/ProductItem';
import styles from '@styles/ProductList.module.scss';

const ProductList = () => {
  const { filtered } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(filtered);
    console.log(filtered);
  }, [filtered]);

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {(products.length != 0)
          ? products.map((product, index) => (
            <ProductItem product={product} indexValue={index} key={product.id} />
          ))
          : (<h1>No results</h1>)
        }
      </div>
    </section>
  );
};

export default ProductList;