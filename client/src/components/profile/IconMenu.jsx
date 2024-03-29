import { React, useState } from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { BsSpotify } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';
import iconStyles from '../../../styles/componentsCSS/IconMenu.module.css';

import { useSelector } from 'react-redux';

const IconMenu = ({ onIconClick }) => {
  const activeCards = useSelector((state) => state.cards);

  return (
    <div className={iconStyles.iconbar}>
      <div>
        <a
          className={`${iconStyles.iconLogos} ${
            activeCards.labels.includes('YouTube') ? iconStyles.activeIcon : ''
          }`}
          onClick={() => onIconClick('YouTube')}
        >
          <AiFillYoutube />
        </a>
      </div>
      <div>
        <a
          className={`${iconStyles.iconLogos} ${
            activeCards.labels.includes('Notes') ? iconStyles.activeIcon : ''
          }`}
          onClick={() => onIconClick('Notes')}
        >
          <CgNotes />
        </a>
      </div>
      <div>
        <a
          className={`${iconStyles.iconLogos} ${
            activeCards.labels.includes('Spotify') ? iconStyles.activeIcon : ''
          }`}
          onClick={() => onIconClick('Spotify')}
        >
          <BsSpotify />
        </a>
      </div>
      <div>
        <a
          className={`${iconStyles.iconLogos} ${
            activeCards.labels.includes('Timer') ? iconStyles.activeIcon : ''
          }`}
          onClick={() => onIconClick('Timer')}
        >
          <IoIosTimer />
        </a>
      </div>
    </div>
  );
};

export default IconMenu;
