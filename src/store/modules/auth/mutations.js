export default {
  setUser(state, payload) {
    state.user = payload;
  },
  setAuthIsReady(state, payload) {
    state.authIsReady = payload;
  },
  setIsLoading(state, payload) {
    state.isLoading = payload;
  },
  setErrorMessage(state, payload) {
    state.errorMessage = payload;
  },
};
