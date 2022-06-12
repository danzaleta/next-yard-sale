import { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import endPoints from "@services/api";
import MyOrder from "@containers/MyOrder";
import Menu from "@components/Menu";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import arrow from '@icons/flechita.svg';
import AppContext from "@context/AppContext";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import styles from '@styles/Header.module.scss';

const Header = () => {
  const productsAPI = endPoints.products.getProducts(100, 0);

  const {
    state,
    toggleMenu,
    toggleOrders,
    setToggleMenu,
    setToggleOrders,
    getProducts,
    products,
    filterByCategory,
    category, setCategory
  } = useContext(AppContext);

  const categories = [
    'All',
    'Clothes',
    'Electronics',
    'Furnitures',
    'Toys',
    'Others',
  ];

  const hangleToggle = ()=>{
    toggleOrders && setToggleOrders(!toggleOrders);
    toggleMenu && setToggleMenu(!toggleMenu);
  };

  const handleFilter =(category)=>{
    filterByCategory(category, products);
    setCategory(category);
  };

  useEffect(()=>{
    getProducts(productsAPI);
  },[productsAPI]);
  
  
  
  return (
    <nav className={styles.Nav}>
      <div className={styles.menu}
        onClick={() => {
          setToggleMenu(!toggleMenu);
          toggleOrders && setToggleOrders(!toggleOrders);
        }}
        onKeyPress={() => {
          setToggleMenu(!toggleMenu);
          toggleOrders && setToggleOrders(!toggleOrders);
        }}
        aria-hidden="true">
        <Image src={menu} alt="menu" width={25} height={25} />
      </div>
      <div className={styles['navbar-left']}>
        <Link href="/" passHref>
          <Image onClick={()=>hangleToggle()} src={logo} alt="logo" className={styles['menu-logo']} />
        </Link>
        <ul>
            {categories.map((categ, index) => (<li className={(categ==category)?styles.active:''} key={index} onClick={()=>handleFilter(categ)} aria-hidden="true"><Link href="/">{categ}</Link></li>))}
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']}
            onClick={() => {
              setToggleMenu(!toggleMenu);
              toggleOrders && setToggleOrders(!toggleOrders);
            }}
            onKeyPress={() => {
              setToggleMenu(!toggleMenu);
              toggleOrders && setToggleOrders(!toggleOrders);
            }}
            aria-hidden="true">
            user@email.com <Image src={arrow} alt="arrow" width={10} height={10} />
          </li>
          <li className={styles['navbar-shopping-cart']}
            onClick={() => {
              setToggleOrders(!toggleOrders);
              toggleMenu && setToggleMenu(!toggleMenu);
            }}
            onKeyPress={() => {
              setToggleOrders(!toggleOrders);
              toggleMenu && setToggleMenu(!toggleMenu);
            }}
            aria-hidden="true">
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleMenu && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
