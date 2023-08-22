import React, { useState } from 'react';
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

  //keeps track of active card
  const [activeCard, setActiveCard] = useState('YouTube');

  // handling our icon click
  const handleIconClick = (title) => {
    setActiveCard(title);
  };

  // get content to display for specific card depending on selected icon

  const getComponentContent = (activeCard) => {
    switch (activeCard) {
      case 'YouTube':
        return <YouTube />;
      case 'Notes':
        return <Notes />;
      case 'Spotify':
        return <Spotify />;
      case 'Timer':
        return <Timer />;
    }
  };

  return (
    <section className={profileStyles.container}>
      <h1 className={profileStyles.welcome}>
        {/*Enables capitlization of first letter in logged user */}
        Welcome Back {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
      </h1>

      <Icon onIconClick={handleIconClick} activeCard={activeCard} />

      <div>
        <Card title={activeCard} content={getComponentContent(activeCard)} />
      </div>
    </section>
  );
};

export default Profile;
