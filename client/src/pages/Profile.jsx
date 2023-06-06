import React from 'react';
import profileStyles from '../../styles/Profile.module.css';
import { useSelector } from 'react-redux';

import { TbPlanet } from 'react-icons/tb';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className={profileStyles.container}>
      <h1>Welcome Back {user.name.toUpperCase()}</h1>
      <div className={profileStyles.grid}>
        <div className={profileStyles.card}>
          {/* <div className={profileStyles.title}>Tasks</div> */}

          <div className={profileStyles.cardItem}>
            <div className={profileStyles.cardLabel}>current time</div>
            <div className={profileStyles.cardRow}>
              <div id={profileStyles.clock}>30:00</div>
            </div>
          </div>
          <div className={profileStyles.cardItem}>
            <div className={profileStyles.cardLabel}>length</div>
            <div className={profileStyles.cardRow}>
              <button className={profileStyles.btn}>+</button>
              <div id={profileStyles.clock}>30:00</div>
              <button className={profileStyles.btn}>-</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
