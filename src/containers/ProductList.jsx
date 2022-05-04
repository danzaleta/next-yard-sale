
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';
import endPoints from '@services/api';

const productsAPI = endPoints.products.getProducts(100, 0);

const ProductList = () => {
  const products = useGetProducts(productsAPI);

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((product, index) => (
          <ProductItem product={product} indexValue={index} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;