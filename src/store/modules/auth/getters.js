export default {
  getUser(state) {
    return state.user;
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
