import React, { useState } from 'react';
import cardStyles from '../../../styles/componentsCSS/Card.module.css';
import Draggable from 'react-draggable';
import { IoClose } from 'react-icons/io5';

import { useDispatch } from 'react-redux';
import { minimizeCard } from '../../app/activeCard/ActiveCard';

const Card = ({ content, label }) => {
  const nodeRef = React.useRef(null);
  const dispatch = useDispatch();

  const minimizeIcon = () => {
    dispatch(minimizeCard(label));
  };

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={cardStyles.card} ref={nodeRef}>
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
