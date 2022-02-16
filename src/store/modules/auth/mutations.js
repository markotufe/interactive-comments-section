export default {
  setUser(state, payload) {
    state.user = payload;
    console.log("User state changed:", state.user);
  },
  setAuthIsReady(state, payload) {
    state.authIsReady = payload;
  },
};
