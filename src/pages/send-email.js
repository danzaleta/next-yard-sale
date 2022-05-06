import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import styles from '@styles/SendEmail.module.scss';

const SendEmail = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/login');
  };

  return (
    <div className={styles.SendEmail}>
      <div className={styles['form-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
        <div className={styles['email-img']}>
          <Image src={email} alt="email" />
        </div>
        <button onClick={() => handleClick()} className={`${styles['primary-button']} ${styles['login-button']}`}>Login</button>
        <p className={styles.resend}>
          <span>Didn`t receive the email?</span>
          <Link href="/password-recovery">Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
