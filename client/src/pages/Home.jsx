import React from 'react';
import styles from '../../styles/Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.h1}>Welcome to Solar Study</h1>
        <p className={styles.mainp}>
          Engage your brain with Solar. Making study time out of this world!
        </p>
        <div className={styles.btnhero}>
          <Link to="/login">
            <button className={styles.btnsignin}>Login</button>
          </Link>
          <Link to="/register">
            <button className={styles.btnsignup}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
