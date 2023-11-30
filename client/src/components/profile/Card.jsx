import React from 'react';
import cardStyles from '../../../styles/componentsCSS/Card.module.css';
import Draggable from 'react-draggable';

/* TODO 
  Figure out why cards move around the screen after being dragged to a different location and minimizing them 
*/

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
