export default {
  comments(state, getters, rootState, rootGetters) {
    console.log(rootState, rootGetters);
    return state.comments;
  },
};
