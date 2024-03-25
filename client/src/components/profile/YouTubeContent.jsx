import React, { useState, useEffect } from 'react';
import ytStyles from '../../../styles/componentsCSS/Youtube.module.css';

/* TODO */
// fix youtube video expanding beyond card
// need to use postMessage API to allow cross-frame communication as iframe is in a different context than the vol control buttons.

const YouTube = () => {
  return (
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
  );
};

export default YouTube;
