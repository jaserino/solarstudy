import { configureStore } from '@reduxjs/toolkit';

/*
// Store - global state
// Slice - slices of state that make up the store
interface CounterState {
  value: Number;
}
interface UserState {
  isSignedIn: Boolean;
}
// Actions - Used to tell redux what you should do to the state
const increment = { type: 'INCREMENT', payload: 1 };
const decrement = { type: 'Decrement', payload: 1 };

// Reducers - will use the type of actions to make the update
// Reducers never change the state itself, they make copies and change them

*/

export const store = configureStore({
  reducer: {},
});
