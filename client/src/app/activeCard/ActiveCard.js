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
      state.labels = state.labels.filter((label) => label !== action.payload);
    },
    addCard: (state, action) => {
      state.labels = [...state.labels, action.payload];
    },
    minimizeCard: (state, action) => {
      state.labels = state.labels.filter((label) => label !== action.payload);
    },
  },
});

// export reducer functions
export const { removeCard, addCard, minimizeCard } = activeCardSlice.actions;

export default activeCardSlice.reducer;
