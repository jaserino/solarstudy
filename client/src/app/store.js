import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../app/activeCard/ActiveCard';
import youtubeReducer from '../app/cardPositions/YoutubeCard';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    youtube: youtubeReducer,
  },
});
