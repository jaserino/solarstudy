import React from 'react';
import profileStyles from '../../styles/Profile.module.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className={profileStyles.container}>
      <h1>Welcome Back {user.name.toUpperCase()}</h1>
      <div className={profileStyles.grid}>
        <div className={profileStyles.card}>
          <h4>Notes</h4>
          <p>
            Standard chunk of Lorem Ipsum used since the 1500s is showed below
            for those interested.
          </p>
          <div></div>
        </div>

        <div className={profileStyles.card}>
          <h4>Timer</h4>
          <p>
            Standard chunk of Lorem Ipsum used since the 1500s is showed below
            for those interested.
          </p>
          <div></div>
        </div>

        <div className={profileStyles.card}>
          <h4>Spotify</h4>
          <p>
            Standard chunk of Lorem Ipsum used since the 1500s is showed below
            for those interested.
          </p>
          <div></div>
        </div>

        <div className={profileStyles.card}>
          <h4>Youtube</h4>
          <p>
            Standard chunk of Lorem Ipsum used since the 1500s is showed below
            for those interested.
          </p>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
