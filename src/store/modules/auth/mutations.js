export default {
  setUser(state, payload) {
    state.user = payload;
  },
  setIsLoading(state, payload) {
    state.isLoading = payload;
  },
  setErrorMessage(state, payload) {
    state.errorMessage = payload;
  },
};
