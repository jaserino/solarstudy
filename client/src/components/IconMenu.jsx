import React from 'react';

import { AiFillYoutube } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { BsSpotify } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';

import iconStyles from '../../styles/componentsCSS/IconMenu.module.css';

const Icon = ({ onIconClick }) => {
  return (
    <div className={iconStyles.iconbar}>
      <a className={iconStyles.iconlist} onClick={() => onIconClick('YouTube')}>
        <AiFillYoutube />
      </a>
      <a className={iconStyles.iconlist} onClick={() => onIconClick('Notes')}>
        <CgNotes />
      </a>
      <a className={iconStyles.iconlist} onClick={() => onIconClick('Spotify')}>
        <BsSpotify />
      </a>
      <a className={iconStyles.iconlist} onClick={() => onIconClick('Timer')}>
        <IoIosTimer />
      </a>
    </div>
  );
};

export default Icon;
