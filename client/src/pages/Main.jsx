import React from 'react';
import styles from '../../styles/Main.module.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className={styles.container}>
      <h1>
        <title>SOLAR STUDY</title>
      </h1>
      <div className={styles.main}>
        <h1 className={styles.h1}>Welcome to Solar</h1>
        <p className={styles.mainp}>
          Engage your brain with Solar. Making study time out of this world
        </p>
        <div className={styles.btnhero}>
          <Link to="/login">
            <button className={styles.btnsignin}>login</button>
          </Link>
          <Link to="/register">
            <button className={styles.btnsignup}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
