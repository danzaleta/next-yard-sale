import React from "react";
import Image from "next/image";
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
    return (
        <div className={styles.NewPassword}>
            <div className={styles['NewPassword-container']}>
                <Image src={logo} alt="logo" className={styles.logo} />
                <h1 className={styles.title}>Create a new password</h1>
                <p className={styles.subtitle}>Enter a new password for your account</p>
                <form action="/" className={styles['main-form']}>
                    <label htmlFor="password" className={styles.label}>
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="********"
                        id="password"
                        className={`${styles.input} ${styles['input-password']}`}
                    />
                    <label htmlFor="new-password" className={styles.label}>
                        Re-enter password
                    </label>
                    <input
                        type="password"
                        placeholder="********"
                        id="new-password"
                        className={`${styles.input} ${styles['input-password']}`}
                    />
                    <input
                        type="submit"
                        value="Confirm"
                        className={`${styles['primary-button']} ${styles['login-button']}`}
                    />
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
