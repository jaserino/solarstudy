import Draggable from 'react-draggable';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setYoutubePos } from '../../app/cardPositions/YoutubeCard';

let GLOBAL_Z = 50;

export const DragWrapper = ({ children, defaultX, defaultY }) => {
  const [isDragging, setIsDragging] = useState(false);

  const nodeRef = React.useRef(null);
  const dispatch = useDispatch();

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const changePosition = (data) => {
    dispatch(setYoutubePos(data.x, data.y));
  };

  return (
    <>
      <Draggable
        position={{ x: defaultX, y: defaultY }}
        onMouseDown={handleMouseDown}
        onStop={(_, data) => {
          setIsDragging(false);
          changePosition(data);
        }}
        onDrag={changePosition}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} onMouseDown={handleMouseDown}>
          {children}
        </div>
      </Draggable>
    </>
  );
};
