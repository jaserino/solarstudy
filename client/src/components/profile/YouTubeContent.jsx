import React from 'react';
import ytStyles from '../../../styles/componentsCSS/Youtube.module.css';

/* TODO */
// fix youtube video expanding beyond card

const YouTube = () => {
  return (
    <div className={ytStyles.tabs}>
      <div className={ytStyles.tab}>
        <input type="checkbox" id="check1" />
        <label className={ytStyles.tablabel} htmlFor="check1">
          Chillstep Lofi
        </label>
        <div className={ytStyles.tabcontent}>
          <iframe src="https://www.youtube.com/embed/LXyTZIEQAsI" />
        </div>
      </div>
      <div className={ytStyles.tab}>
        <input type="checkbox" id="check2" />
        <label className={ytStyles.tablabel} htmlFor="check2">
          Hip/Hop Lofi
        </label>
        <div className={ytStyles.tabcontent}>
          <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk" />
        </div>
      </div>

      <div className={ytStyles.tab}>
        <input type="checkbox" id="check3" />
        <label className={ytStyles.tablabel} htmlFor="check3">
          Anime Lofi
        </label>
        <div className={ytStyles.tabcontent}>
          <iframe src="https://www.youtube.com/embed/dd-bYJk8CtM" />
        </div>
      </div>
    </div>
  );
};

export default YouTube;
