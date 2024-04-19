import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ytPosX: 200,
  ytPosY: -50,
};

const youtubeCardSlice = createSlice({
  name: 'youtube',
  initialState,
  reducers: {
    setYoutubePos: (state, action) => {
      state.ytPosX = action.payload.x;
      state.ytPosY = action.payload.y;
    },
  },
});

export const { setYoutubePos } = youtubeCardSlice.actions;

export default youtubeCardSlice.reducer;
