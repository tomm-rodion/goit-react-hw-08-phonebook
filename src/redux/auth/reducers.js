export const handleRegisterFilfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
export const handleLoginFilfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
export const handleLogOutFilfilledReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
export const handleRrefreshUserPendingReducer = state => {
  state.isRefreshing = true;
};
export const handleRrefreshUserFilfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
export const handleRrefreshUserRejectedReducer = state => {
  state.isRefreshing = false;
};
