import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { extractErrorMessage } from '../../utils';
import authService from './authService';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
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

// logging out a user
export const logout = createAction('auth/logout', () => {
  authService.logout();
  // return an empty object as our payload as we don't need a payload but the
  // prepare function requires a payload return
  return {};
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.user = null;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
