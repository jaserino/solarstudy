import { React, useState } from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { BsSpotify } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';

import iconStyles from '../../../styles/componentsCSS/IconMenu.module.css';

// active icon works but need to be an array format so that there can be multiple active classes to get the active class

const Icon = ({ onIconClick }) => {
  const [activeIcon, setActiveIcon] = useState('');

  const handleClick = (title) => {
    if (activeIcon === title) {
      setActiveIcon('');
    } else {
      setActiveIcon(title);
    }
    onIconClick(title);
  };
  return (
    <div className={iconStyles.iconbar}>
      <div className={iconStyles.iconBox}>
        <h1>YouTube</h1>
        <a
          className={`${iconStyles.iconLogos} ${
            activeIcon === 'YouTube' ? iconStyles.activeIcon : ''
          }`}
          onClick={() => handleClick('YouTube')}
        >
          <AiFillYoutube />
        </a>
      </div>

      <div className={iconStyles.iconBox}>
        <h1>Notes</h1>
        <a
          className={`${iconStyles.iconLogos} ${
            activeIcon === 'Notes' ? iconStyles.activeIcon : ''
          }`}
          onClick={() => handleClick('Notes')}
        >
          <CgNotes />
        </a>
      </div>

      <div className={iconStyles.iconBox}>
        <h1>Spotify</h1>
        <a
          className={`${iconStyles.iconLogos} ${
            activeIcon === 'Spotify' ? iconStyles.activeIcon : ''
          }`}
          onClick={() => handleClick('Spotify')}
        >
          <BsSpotify />
        </a>
      </div>

      <div className={iconStyles.iconBox}>
        <h1>Timer</h1>
        <a
          className={`${iconStyles.iconLogos} ${
            activeIcon === 'Timer' ? iconStyles.activeIcon : ''
          }`}
          onClick={() => handleClick('Timer')}
        >
          <IoIosTimer />
        </a>
      </div>
    </div>
  );
};

export default Icon;
