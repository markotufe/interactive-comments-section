export default {
  getUser(state, getters, rootState, rootGetters) {
    console.log(rootState, rootGetters);
    return state.user;
  },
};