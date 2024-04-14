import React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { minimizeCard } from '../../app/activeCard/ActiveCard';
import cardStyles from '../../../styles/componentsCSS/Card.module.css';

const Timer = ({ label }) => {
  const nodeRef = React.useRef(null);
  const dispatch = useDispatch();

  const minimizeIcon = () => {
    dispatch(minimizeCard(label));
  };

  return (
    <Draggable bounds="body" nodeRef={nodeRef}>
      <div className={cardStyles.card} ref={nodeRef}>
        <div className={cardStyles.minimize}>
          <IoClose onClick={minimizeIcon} />
        </div>
        <h3>Timer</h3>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui soluta
        tempore laborum rerum incidunt nobis voluptas dignissimos hic quidem
        ipsam! Voluptate laboriosam excepturi soluta dolorum facere explicabo
        tempora accusantium harum.
      </div>
    </Draggable>
  );
};

export default Timer;
