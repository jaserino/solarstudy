import React from 'react';
import cardStyles from '../../styles/componentsCSS/Card.module.css';
import Draggable from 'react-draggable';

const Card = ({ title, content }) => {
  const nodeRef = React.useRef(null);
  return (
    <Draggable nodeRef={nodeRef}>
      <div className={cardStyles.card} ref={nodeRef}>
        <h3>{title}</h3>
        {content}
      </div>
    </Draggable>
  );
};

export default Card;
