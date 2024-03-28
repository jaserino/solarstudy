import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: ['YouTube', 'Notes', 'Spotify', 'Timer'],
};

// TODO
// Implement reducers for icon color change
const activeCardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card !== action.payload);
    },
  },
});

// export reducer functions
export const { removeCard } = activeCardSlice.actions;

export default activeCardSlice.reducer;
