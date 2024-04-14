import React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { minimizeCard } from '../../app/activeCard/ActiveCard';

import cardStyles from '../../../styles/componentsCSS/Card.module.css';
import ytStyles from '../../../styles/componentsCSS/Youtube.module.css';

const YouTube = ({ label }) => {
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
    </Draggable>
  );
};

export default YouTube;
