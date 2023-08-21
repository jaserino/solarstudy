import React from 'react';
import profileStyles from '../../styles/Profile.module.css';

const Card = ({ title, content }) => {
  return (
    <div className={profileStyles.card}>
      <h3>{title}</h3>
      {content}
    </div>
  );
};

export default Card;
