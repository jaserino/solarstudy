import React from 'react';
import profileStyles from '../../styles/pagesCSS/Profile.module.css';
import { useSelector } from 'react-redux';

import Card from '../components/Card';
import YouTube from '../components/YouTubeContent';
import Notes from '../components/NotesContent';
import Timer from '../components/TimerContent';
import Spotify from '../components/SpotifyContent';
import Icon from '../components/IconMenu';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className={profileStyles.container}>
      <h1 className={profileStyles.welcome}>
        {/*Enables capitlization of first letter in logged user */}
        Welcome Back {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
      </h1>

      <Icon />

      <div className={profileStyles.grid}>
        <Card title="YouTube" content={<YouTube />} />
        <Card title="Notes" content={<Notes />} />
        <Card title="Timers" content={<Timer />} />
        <Card title="Spotify" content={<Spotify />} />
      </div>
    </section>
  );
};

export default Profile;
