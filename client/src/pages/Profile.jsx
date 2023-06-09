import React from 'react';
import profileStyles from '../../styles/Profile.module.css';
import { useSelector } from 'react-redux';

import { TbPlanet } from 'react-icons/tb';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className={profileStyles.container}>
      <h1 className={profileStyles.welcome}>
        Welcome back Sara!
        {/* Welcome Back {user.name.toUpperCase()} */}
      </h1>
      <div className={profileStyles.grid}>
        <div className={profileStyles.card}>
          <h3>YouTube</h3>
          <div className={profileStyles.tabs}>
            <div className={profileStyles.tab}>
              <input type="checkbox" id="check1" />
              <label className={profileStyles.tablabel} htmlFor="check1">
                Chillstep Lofi
              </label>
              <div className={profileStyles.tabcontent}>
                <iframe src="https://www.youtube.com/embed/MVPTGNGiI-4" />
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
        </div>

        <div className={profileStyles.card}>
          <h3>Tasks</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            maxime sunt dolor sit sapiente aliquid beatae impedit blanditiis
            quisquam est similique expedita repellendus, amet at, fugit corrupti
            sequi esse? Repellat!
          </p>
        </div>
        <div className={profileStyles.card}>
          <h3>Spotify</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            maxime sunt dolor sit sapiente aliquid beatae impedit blanditiis
            quisquam est similique expedita repellendus, amet at, fugit corrupti
            sequi esse? Repellat!
          </p>
        </div>
        <div className={profileStyles.card}>
          <h3>Spotify</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            maxime sunt dolor sit sapiente aliquid beatae impedit blanditiis
            quisquam est similique expedita repellendus, amet at, fugit corrupti
            sequi esse? Repellat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
