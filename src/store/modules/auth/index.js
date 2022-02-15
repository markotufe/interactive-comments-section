import authMutations from "./mutations";
import authActions from "./actions";
import authGetters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
