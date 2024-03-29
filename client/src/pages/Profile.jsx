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

  return (
    <>
      <div className={profileStyles.iconNav}>
        <IconMenu onIconClick={handleIconClick} />
      </div>
      <div className={profileStyles.container}>
        <div className={profileStyles.cardGrid}>
          {activeCards.labels.map((label, i) => (
            <div
              key={label}
              className={`${profileStyles.gridItem} ${
                profileStyles[`gridItem${i}`]
              }`}
            >
              <Card label={label} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
