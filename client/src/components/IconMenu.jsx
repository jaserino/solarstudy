import React from 'react';

import AiFillYoutube from 'react-icons';
import CgNotes from 'react-icons';
import BsSpotify from 'react-icons';
import IoIosTimer from 'react-icons';

const IconMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <AiFillYoutube />
        </li>
        <li>
          <CgNotes />
        </li>
        <li>
          <BsSpotify />
        </li>
        <li>
          <IoIosTimer />
        </li>
      </ul>
    </div>
  );
};

export default IconMenu;
