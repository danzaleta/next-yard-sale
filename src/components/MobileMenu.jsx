import Link from "next/link";
import styles from "@styles/MobileMenu.module.scss";

const MobileMenu = () => {
    return (
        <div className={styles.MobileMenu}>
            <ul>
                <li>
                    <Link href="/">
                        CATEGORIES
                    </Link>
                </li>
                <li>
                    <Link href="/">All</Link>
                </li>
                <li>
                    <Link href="/">Clothes</Link>
                </li>
                <li>
                    <Link href="/">Electronics</Link>
                </li>
                <li>
                    <Link href="/">Furnitures</Link>
                </li>
                <li>
                    <Link href="/">Toys</Link>
                </li>
                <li>
                    <Link href="/">Others</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/">My orders</Link>
                </li>
                <li>
                    <Link href="/">My account</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <p className={styles.email}>user@email.com</p>
                </li>
                <li>
                    <Link href="/" className={styles['sign-out']}>
                        Sign out
                    </Link>
                </li>
            </ul>

        </div>
    );
};

export default MobileMenu;