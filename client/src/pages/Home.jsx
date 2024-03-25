import React from 'react';
import styles from '../../styles/pagesCSS/Home.module.css';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.h1}>Welcome to Solar Study</h1>
          <p className={styles.mainp}>Making study time out of this world!</p>
          <div className={styles.btnhero}>
            <Link to="/profile">
              <button className={styles.btnsignin}>Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
