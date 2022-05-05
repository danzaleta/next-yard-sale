import { useContext, useState } from "react";
import Image from "next/image";
import AppContext from "@context/AppContext";
import addToCartImg from '@icons/bt_add_to_cart.svg';
import addedToCartImg from '@icons/bt_added_to_cart.svg';
import closeImg from '@icons/icon_close.png';
import styles from "@styles/ProductItem.module.scss";

const ProductItem = ({ product, indexValue }) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  const { addToCart } = useContext(AppContext);
  const [added, setAdded] = useState(false);


  const handleClick = (item) => {
    addToCart(item);
    setAdded(true);
  };

  return (
    <div className={styles.ProductItem}>
      <div className={styles['img-container']}>
        {product.images[0] && <Image src={(product.images[0].match(/https/)) ? product.images[0] : closeImg} alt={product.title} width={240} height={240} />}
      </div>
      <div className={styles['product-info']}>
        <div>
          <p>USD {formatter.format(product.price)}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product, indexValue)} onKeyPress={() => handleClick(product, indexValue)} aria-hidden="true">
          <Image src={(!added) ? addToCartImg : addedToCartImg} alt="add" width={35} height={35} layout="fixed" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
