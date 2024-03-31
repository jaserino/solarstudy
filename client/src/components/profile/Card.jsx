import React from 'react';
import cardStyles from '../../../styles/componentsCSS/Card.module.css';
import Draggable from 'react-draggable';
import { IoClose } from 'react-icons/io5';

import { useDispatch } from 'react-redux';

// TODO
/* get rid of dynamic card component
   each card needs to be unique
   each card should be made draggable on its own
   make individual cards not dynamic card 
*/

const Card = ({ content, label }) => {
  const dispatch = useDispatch();

  const minimizeIcon = () => {
    dispatch(minimizeCard(label));
  };

  return (
    <Draggable bounds="body">
      <div className={cardStyles.card}>
        <div className={cardStyles.minimize}>
          <IoClose onClick={minimizeIcon} />
        </div>
        <h3>{label}</h3>
        {content}
      </div>
    </Draggable>
  );
};

export default Card;
