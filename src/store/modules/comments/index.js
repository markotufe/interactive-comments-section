import commentsMutations from "./mutations";
import commentsActions from "./actions";
import commentsGetters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      commentsList: [],
    };
  },
  mutations: commentsMutations,
  actions: commentsActions,
  getters: commentsGetters,
};
