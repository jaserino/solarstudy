import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../app/activeCard/ActiveCard';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
