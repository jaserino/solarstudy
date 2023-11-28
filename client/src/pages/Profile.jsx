import React, { useState } from 'react';
import profileStyles from '../../styles/pagesCSS/Profile.module.css';

import Card from '../components/profile/Card';
import YouTube from '../components/profile/YouTubeContent';
import Notes from '../components/profile/NotesContent';
import Timer from '../components/profile/TimerContent';
import Spotify from '../components/profile/SpotifyContent';
import Icon from '../components/profile/IconMenu';

const Profile = () => {
  //keeps track of active card
  const [activeCard, setActiveCard] = useState([]);
  // console.log(`Current Card: ${activeCard}`);

  // handling our icon click
  const handleCardClick = (title) => {
    // checks if card title is present in activeCard array
    if (activeCard.includes(title)) {
      // if it is, the title is removed from the array
      setActiveCard(activeCard.filter((card) => card !== title));
    } else {
      //adding title to the array if its not already there
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
        <div className={profileStyles.welcome}>Welcome to SolarStudy</div>
        <Icon onIconClick={handleCardClick} activeCard={activeCard} />
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
