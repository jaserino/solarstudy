import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { extractErrorMessage } from '../../utils';
import authService from './authService';

const initialState = {
  user: null,
  isLoading: false,
};

// we will dispatch this register function and pass it the userData
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

//will be used to login user when passed the users credentials
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  console.log(user);
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
