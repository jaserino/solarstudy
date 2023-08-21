import React from 'react';
import profileStyles from '../../styles/Profile.module.css';
import { useSelector } from 'react-redux';

import Card from '../components/Card';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className={profileStyles.container}>
      <h1 className={profileStyles.welcome}>
        {/*Enables capitlization of first letter in logged user */}
        Welcome Back {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
      </h1>

      <div>Icon Bar will go here</div>
      <div className={profileStyles.grid}>
        <Card
          title="YouTube"
          content={
            <div className={profileStyles.tabs}>
              <div className={profileStyles.tab}>
                <input type="checkbox" id="check1" />
                <label className={profileStyles.tablabel} htmlFor="check1">
                  Chillstep Lofi
                </label>
                <div className={profileStyles.tabcontent}>
                  <iframe src="https://www.youtube.com/embed/LXyTZIEQAsI" />
                </div>
              </div>
              <div className={profileStyles.tab}>
                <input type="checkbox" id="check2" />
                <label className={profileStyles.tablabel} htmlFor="check2">
                  Hip/Hop Lofi
                </label>
                <div className={profileStyles.tabcontent}>
                  <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk" />
                </div>
              </div>

              <div className={profileStyles.tab}>
                <input type="checkbox" id="check3" />
                <label className={profileStyles.tablabel} htmlFor="check3">
                  Anime Lofi
                </label>
                <div className={profileStyles.tabcontent}>
                  <iframe src="https://www.youtube.com/embed/dd-bYJk8CtM" />
                </div>
              </div>
            </div>
          }
        />

        <Card
          title="Notes"
          content={
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              officia repellendus, omnis commodi voluptatum aliquid minus error
              accusamus debitis similique, molestias, blanditiis suscipit
              voluptatem! Quam dicta corrupti voluptate molestias cupiditate.
            </p>
          }
        />
        <Card
          title="Timers"
          content={
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              officia repellendus, omnis commodi voluptatum aliquid minus error
              accusamus debitis similique, molestias, blanditiis suscipit
              voluptatem! Quam dicta corrupti voluptate molestias cupiditate.
            </p>
          }
        />
        <Card
          title="Spotify"
          content={
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              officia repellendus, omnis commodi voluptatum aliquid minus error
              accusamus debitis similique, molestias, blanditiis suscipit
              voluptatem! Quam dicta corrupti voluptate molestias cupiditate.
            </p>
          }
        />
      </div>
    </section>
  );
};

export default Profile;
