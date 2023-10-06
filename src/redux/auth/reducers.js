export const handleRegisterFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
export const handleLoginFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
export const handleLogOutFulfilledReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
export const handleRefreshUserPendingReducer = state => {
  state.isRefreshing = true;
};
export const handleRefreshUserFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
export const handleRefreshUserRejectedReducer = state => {
  state.isRefreshing = false;
};
