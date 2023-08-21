import React from 'react';
import cardStyles from '../../styles/componentsCSS/Card.module.css';

const Card = ({ title, content }) => {
  return (
    <div className={cardStyles.card}>
      <h3>{title}</h3>
      {content}
    </div>
  );
};

export default Card;
