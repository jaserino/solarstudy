import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  labels: ['YouTube', 'Notes', 'Spotify', 'Timer'],
};

// TODO
// Implement reducers for icon color change
const activeCardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    removeCard: (state, action) => {
      state.labels = state.labels.filter((lable) => lable !== action.payload);
    },
    addCard: (state, action) => {
      state.labels = [...state.labels, action.payload];
    },
  },
});

// export reducer functions
export const { removeCard, addCard } = activeCardSlice.actions;

export default activeCardSlice.reducer;
