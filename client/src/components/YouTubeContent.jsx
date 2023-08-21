import React from 'react';
import youtubeStyles from '../../styles/componentsCSS/Youtube.module.css';

const YouTube = () => {
  return (
    <div className={youtubeStyles.tabs}>
      <div className={youtubeStyles.tab}>
        <input type="checkbox" id="check1" />
        <label className={youtubeStyles.tablabel} htmlFor="check1">
          Chillstep Lofi
        </label>
        <div className={youtubeStyles.tabcontent}>
          <iframe src="https://www.youtube.com/embed/LXyTZIEQAsI" />
        </div>
      </div>
      <div className={youtubeStyles.tab}>
        <input type="checkbox" id="check2" />
        <label className={youtubeStyles.tablabel} htmlFor="check2">
          Hip/Hop Lofi
        </label>
        <div className={youtubeStyles.tabcontent}>
          <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk" />
        </div>
      </div>

      <div className={youtubeStyles.tab}>
        <input type="checkbox" id="check3" />
        <label className={youtubeStyles.tablabel} htmlFor="check3">
          Anime Lofi
        </label>
        <div className={youtubeStyles.tabcontent}>
          <iframe src="https://www.youtube.com/embed/dd-bYJk8CtM" />
        </div>
      </div>
    </div>
  );
};

export default YouTube;
