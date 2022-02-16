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
  isLoading(state) {
    return state.isLoading;
  },
  getErrorMessage(state) {
    return state.errorMessage;
  },
};
