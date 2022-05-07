import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
    const categories = [
        'All',
        'Clothes',
        'Electronics',
        'Furnitures',
        'Toys',
        'Others',
    ];

    const {toggleMenu, setToggleMenu} = useContext(AppContext);

    return (
        <div className={styles.Menu}>
            <ul className={styles.categories}>
                <li>
                    <p>
                        CATEGORIES
                    </p>
                </li>
                {categories.map((category, index)=>(<li onClick={()=>setToggleMenu(!toggleMenu)} aria-hidden="true" key={index}><Link href="/">{category}</Link></li>))}
            </ul>

            <ul className={styles.user}>
                <li onClick={()=>setToggleMenu(!toggleMenu)} aria-hidden="true">
                    <Link href="/orders">My orders</Link>
                </li>
                <li onClick={()=>setToggleMenu(!toggleMenu)} aria-hidden="true">
                    <Link href="/account">My account</Link>
                </li>
            </ul>

            <ul className={styles['sign-out']}>
                <li>
                    <p className={styles.email}>user@email.com</p>
                </li>
                <li onClick={()=>setToggleMenu(!toggleMenu)} aria-hidden="true">
                    <Link href="/login">
                        Sign out
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;