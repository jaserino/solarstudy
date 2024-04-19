import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { minimizeCard } from '../../app/activeCard/ActiveCard';
import { DragWrapper } from '../draggable/DragWrapper';

import cardStyles from '../../../styles/componentsCSS/Card.module.css';
import ytStyles from '../../../styles/componentsCSS/Youtube.module.css';

const YouTube = ({ label }) => {
  const ytPosition = useSelector((state) => state.youtube);
  const dispatch = useDispatch();

  const { ytPosX, ytPosY, setYtPos } = ytPosition;

  const minimizeIcon = () => {
    dispatch(minimizeCard(label));
  };

  return (
    <DragWrapper defaultX={ytPosX} defaultY={ytPosY} dispatch={useDispatch}>
      <div className={cardStyles.card}>
        <div className={cardStyles.minimize}>
          <IoClose onClick={minimizeIcon} />
        </div>
        <h3>YouTube</h3>
        <div className={ytStyles.tabs}>
          <div className={ytStyles.tab}>
            <input type="checkbox" id="check1" />
            <label className={ytStyles.tablabel1} htmlFor="check1">
              Chillstep Lofi
            </label>
            <div className={ytStyles.tabcontent1}>
              <iframe
                id="video1"
                src="https://www.youtube.com/embed/LXyTZIEQAsI"
                title="Chillstep Lofi"
                allowFullScreen
              />
            </div>
          </div>
          <div className={ytStyles.tab}>
            <input type="checkbox" id="check2" />
            <label className={ytStyles.tablabel} htmlFor="check2">
              Hip/Hop Lofi
            </label>
            <div className={ytStyles.tabcontent}>
              <iframe
                src="https://www.youtube.com/embed/jfKfPfyJRdk"
                title="Hip/Hop Lofi"
                allowFullScreen
              />
            </div>
          </div>

          <div className={ytStyles.tab}>
            <input type="checkbox" id="check3" />
            <label className={ytStyles.tablabel} htmlFor="check3">
              Anime Lofi
            </label>
            <div id="tab3" className={ytStyles.tabcontent}>
              <iframe
                src="https://www.youtube.com/embed/dd-bYJk8CtM"
                title="Anime Lofi"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </DragWrapper>
  );
};

export default YouTube;
