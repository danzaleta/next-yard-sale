import React, { useContext } from "react";
import Image from "next/image";
import AppContext from "@context/AppContext";
import addToCartImg from '@icons/bt_add_to_cart.svg';
import styles from "@styles/ProductItem.module.scss";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
    {product.images[0] && <Image src={product.images[0]} alt={product.title} width={240} height={240} />}
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={addToCartImg} alt="add" width={35} height={35}/>
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
