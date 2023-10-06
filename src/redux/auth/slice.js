import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {
  handleLogOutFulfilledReducer,
  handleLoginFulfilledReducer,
  handleRegisterFulfilledReducer,
  handleRefreshUserFulfilledReducer,
  handleRefreshUserPendingReducer,
  handleRefreshUserRejectedReducer,
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
      .addCase(register.fulfilled, handleRegisterFulfilledReducer)
      .addCase(logIn.fulfilled, handleLoginFulfilledReducer)
      .addCase(logOut.fulfilled, handleLogOutFulfilledReducer)
      .addCase(refreshUser.pending, handleRefreshUserPendingReducer)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilledReducer)
      .addCase(refreshUser.rejected, handleRefreshUserRejectedReducer);
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
