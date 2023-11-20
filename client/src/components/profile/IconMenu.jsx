import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { BsSpotify } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';

import iconStyles from '../../../styles/componentsCSS/IconMenu.module.css';

const Icon = ({ onIconClick }) => {
  return (
    <div className={iconStyles.iconbar}>
      <div className={iconStyles.iconBox}>
        <h1>YouTube</h1>
        <a
          className={iconStyles.iconLogos}
          onClick={() => onIconClick('YouTube')}
        >
          <AiFillYoutube />
        </a>
      </div>

      <div className={iconStyles.iconBox}>
        <h1>Notes</h1>
        <a
          className={iconStyles.iconLogos}
          onClick={() => onIconClick('Notes')}
        >
          <CgNotes />
        </a>
      </div>

      <div className={iconStyles.iconBox}>
        <h1>Spotify</h1>
        <a
          className={iconStyles.iconLogos}
          onClick={() => onIconClick('Spotify')}
        >
          <BsSpotify />
        </a>
      </div>

      <div className={iconStyles.iconBox}>
        <h1>Timer</h1>
        <a
          className={iconStyles.iconLogos}
          onClick={() => onIconClick('Timer')}
        >
          <IoIosTimer />
        </a>
      </div>
    </div>
  );
};

export default Icon;
