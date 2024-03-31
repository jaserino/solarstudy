import React, { useState } from 'react';
import profileStyles from '../../styles/pagesCSS/Profile.module.css';

import Card from '../components/profile/Card';
import YouTube from '../components/profile/YouTubeContent';
import Notes from '../components/profile/NotesContent';
import Timer from '../components/profile/TimerContent';
import Spotify from '../components/profile/SpotifyContent';
import IconMenu from '../components/profile/IconMenu';
import { useSelector, useDispatch } from 'react-redux';
import { removeCard, addCard } from '../app/activeCard/ActiveCard';

const Profile = () => {
  const activeCards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const handleIconClick = (label) => {
    const cardExists = activeCards.labels.includes(label);
    dispatch(cardExists ? removeCard(label) : addCard(label));
  };

  // returning card content
  const getComponentContent = (activeCards) => {
    switch (activeCards) {
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
    <>
      <div className={profileStyles.iconNav}>
        <IconMenu onIconClick={handleIconClick} />
      </div>
      <div className={profileStyles.container}>
        {activeCards.labels.map((label) => (
          <div>
            <Card label={label} content={getComponentContent(label)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
