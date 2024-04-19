import React from 'react';
import { useDispatch } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { minimizeCard } from '../../app/activeCard/ActiveCard';
import cardStyles from '../../../styles/componentsCSS/Card.module.css';

const Spotify = ({ label }) => {
  const nodeRef = React.useRef(null);
  const dispatch = useDispatch();

  const minimizeIcon = () => {
    dispatch(minimizeCard(label));
  };

  return (
    <>
      <div className={cardStyles.card}>
        <div className={cardStyles.minimize}>
          <IoClose onClick={minimizeIcon} />
        </div>
        <h3>Spotify</h3>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui soluta
        tempore laborum rerum incidunt nobis voluptas dignissimos hic quidem
        ipsam! Voluptate laboriosam excepturi soluta dolorum facere explicabo
        tempora accusantium harum.
      </div>
    </>
  );
};

export default Spotify;
