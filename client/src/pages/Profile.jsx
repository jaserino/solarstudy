import React from 'react';
import profileStyles from '../../styles/pagesCSS/Profile.module.css';

import YouTube from '../components/profile/YouTubeContent';
import Notes from '../components/profile/NotesContent';
import Timer from '../components/profile/TimerContent';
import Spotify from '../components/profile/SpotifyContent';
import IconMenu from '../components/profile/IconMenu';

import { useSelector, useDispatch } from 'react-redux';
import { removeCard, addCard } from '../app/activeCard/ActiveCard';

const Profile = ({ label }) => {
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
        {activeCards.labels.map((cardLabel) => (
          <div key={cardLabel}>
            {/* {cardLabel === 'Notes' && <Notes label={cardLabel} />} */}
            {cardLabel === 'YouTube' && <YouTube label={cardLabel} />}
            {/* {cardLabel === 'Spotify' && <Spotify label={cardLabel} />}
            {cardLabel === 'Timer' && <Timer label={cardLabel} />} */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
