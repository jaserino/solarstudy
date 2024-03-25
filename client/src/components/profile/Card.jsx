import React, { useState } from 'react';
import cardStyles from '../../../styles/componentsCSS/Card.module.css';
import Draggable from 'react-draggable';
import { IoClose } from 'react-icons/io5';

//TODO *****
// Implement Redux to store the activeIcon and activeCard state. this will be beneficial down the road.
// Figure out why cards move around the screen after being dragged to a different location and minimizing them

const Card = ({ title, content, activeCard, setActiveCard }) => {
  const nodeRef = React.useRef(null);

  const [minimized, setMinimized] = useState(false);

  const minimizeCard = () => {
    const minimize = activeCard.filter((card) => card !== title);

    setActiveCard(minimize);

    if (minimize.length === 0) {
      setMinimized(true);
    }
  };

  return (
    <Draggable nodeRef={nodeRef}>
      <div className={cardStyles.card} ref={nodeRef}>
        <div className={cardStyles.minimize}>
          <IoClose onClick={minimizeCard} />
        </div>
        <h3>{title}</h3>
        {content}
      </div>
    </Draggable>
  );
};

export default Card;
