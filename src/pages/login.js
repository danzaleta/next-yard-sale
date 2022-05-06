import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/Login.module.scss';

const Login = () => {
  const form = useRef(null);
  const router = useRouter();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
    router.push('/');
  };

  return (
    <div className={styles.Login}>
      <div className={styles['form-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <form action="/" className={styles['main-form']} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input type="text" placeholder="user@email.com" name="email" className={`${styles.input} ${styles['input-email']}`} />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" placeholder="********" name="password" className={`${styles.input} ${styles['input-password']}`} />
          <input type="button" value="Login" className={`${styles['primary-button']} ${styles['login-button']}`} onClick={handleSubmit} />
          <Link href="/password-recovery">Forgot my password</Link>
          <button type="button" className={`${styles['secondary-button']} ${styles['signup-button']}`}>
            <Link href="/signup">Sign up</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
