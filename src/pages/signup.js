//import React from 'react';
import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
  return (
    <div className={styles.CreateAccount}>
      <div className={styles['CreateAccount-container']}>
        <h1 className={styles.title}>Create a new account</h1>
        <form action="/" className={styles['main-form']}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input type="text" placeholder="Example Name" id="name" className={`${styles.input} ${styles['input-name']}`} />
            <label htmlFor="email" className={styles.label}>
              Email address
            </label>
            <input type="text" placeholder="user@email.com" id="email" className={`${styles.input} ${styles['input-email']}`} />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input type="password" placeholder="********" id="password" className={`${styles.input} ${styles['input-password']}`} />
          </div>
          <input type="submit" value="Create" className={`${styles['primary-button']} ${styles['login-button']}`} />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
