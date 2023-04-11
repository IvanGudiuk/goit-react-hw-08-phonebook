import { createSlice } from '@reduxjs/toolkit';
import {
  userCreateThunk,
  userLoginThunk,
  userLogoutThunk,
  refreshThunk,
} from './thunks';

const initialAuth = {
  user: { name: null, email: null },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  error: '',
};

const authSlice = createSlice({
  name: 'Auth',
  initialState: initialAuth,
  extraReducers: builder => {
    builder
      .addCase(userCreateThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(userCreateThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(userCreateThunk.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isRefreshing = false;
      })
      .addCase(userLoginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(userLoginThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(userLoginThunk.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isRefreshing = false;
      })
      .addCase(userLogoutThunk.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = '';
        state.isRefreshing = false;
      })
      .addCase(userLogoutThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(userLogoutThunk.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
