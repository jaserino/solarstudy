import React from 'react';

import { AiFillYoutube } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { BsSpotify } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';

import iconStyles from '../../styles/componentsCSS/IconMenu.module.css';

const Icon = () => {
  return (
    <div className={iconStyles.iconbar}>
      <a className={iconStyles.iconlist}>
        <AiFillYoutube />
      </a>
      <a className={iconStyles.iconlist}>
        <CgNotes />
      </a>
      <a className={iconStyles.iconlist}>
        <BsSpotify />
      </a>
      <a className={iconStyles.iconlist}>
        <IoIosTimer />
      </a>
    </div>
  );
};

export default Icon;
