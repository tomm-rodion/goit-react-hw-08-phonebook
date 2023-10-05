import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {
  handleLogOutFilfilledReducer,
  handleLoginFilfilledReducer,
  handleRegisterFilfilledReducer,
  handleRrefreshUserFilfilledReducer,
  handleRrefreshUserPendingReducer,
  handleRrefreshUserRejectedReducer,
} from './reducers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: bulder => {
    bulder
      .addCase(register.fulfilled, handleRegisterFilfilledReducer)
      .addCase(logIn.fulfilled, handleLoginFilfilledReducer)
      .addCase(logOut.fulfilled, handleLogOutFilfilledReducer)
      .addCase(refreshUser.pending, handleRrefreshUserPendingReducer)
      .addCase(refreshUser.fulfilled, handleRrefreshUserFilfilledReducer)
      .addCase(refreshUser.rejected, handleRrefreshUserRejectedReducer);
  },
});

export const authReducer = authSlice.reducer;

//  {
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
