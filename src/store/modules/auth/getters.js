export default {
  getUser(state) {
    return state.user;
  },
  isAuthReady(state) {
    return state.authIsReady;
  },
  isAuthenticated(state) {
    return !!state.user;
  },
};
