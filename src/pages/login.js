import React, { useRef } from "react";
import Image from "next/image";
import logo from '@logos/logo_yard_sale.svg';
import styles from "@styles/Login.module.scss";

const Login = () => {
    const form = useRef(null);
    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
    };

    return (
        <div className={styles.Login}>
            <div className={styles['form-container']}>
                <Image src={logo} alt="logo" className={styles.logo} />
                <form action="/" className={styles['main-form']} ref={form}>
                    <label htmlFor="email" className={styles.label}>Email address</label>
                    <input type="text" placeholder="user@email.com" name="email" className={`${styles.input} ${styles['input-email']}`} />
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input type="password" placeholder="********" name="password" className={`${styles.input} ${styles['input-password']}`} />
                    <input type="button" value="Login" className={`${styles['primary-button']} ${styles['login-button']}`} onClick={handleSubmit} />
                    <a href="/">Forgot my password</a>
                    <button type="button" className={`${styles['secondary-button']} ${styles['signup-button']}`}>Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
