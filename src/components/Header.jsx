import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import MyOrder from "@containers/MyOrder";
import Menu from "@components/Menu";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import arrow from '@icons/flechita.svg';
import AppContext from "@context/AppContext";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import styles from '@styles/Header.module.scss';

const Header = () => {

  const {
    state,
    toggleMenu,
    toggleOrders,
    setToggleMenu,
    setToggleOrders,
  } = useContext(AppContext);

  const categories = [
    'All',
    'Clothes',
    'Electronics',
    'Furnitures',
    'Toys',
    'Others',
  ];

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
          <Image src={logo} alt="logo" className={styles['menu-logo']} />
        </Link>
        <ul>
          <li>
            {categories.map((category, index) => (<Link href="/" key={index}>{category}</Link>))}
          </li>
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
