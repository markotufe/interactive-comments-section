import authMutations from "./mutations";
import authActions from "./actions";
import authGetters from "./getters";

export default {
  state() {
    return {
      user: null,
      authIsReady: false,
      isLoading: false,
      errorMessage: "",
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
