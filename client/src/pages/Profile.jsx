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
  const [activeCard, setActiveCard] = useState([]);

  // handling our icon click
  const handleIconClick = (title) => {
    // checks if card title is included in activeCard array
    if (activeCard.includes(title)) {
      // if it is the title is removed from the array
      setActiveCard(activeCard.filter((card) => card !== title));
    } else {
      //if it isnt the card title it is added to existing active card array|
      setActiveCard([...activeCard, title]);
    }
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
    <div className={profileStyles.container}>
      <div className={profileStyles.topGrid}>
        <div className={profileStyles.welcome}>
          Welcome Back {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
        </div>
        <Icon onIconClick={handleIconClick} activeCard={activeCard} />
      </div>
      <div className={profileStyles.bottomGrid}>
        {activeCard.map((title, i) => (
          <div
            key={title}
            className={`${profileStyles.gridItem} ${
              profileStyles[`gridItem${i}`]
            }`}
          >
            <Card title={title} content={getComponentContent(title)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
