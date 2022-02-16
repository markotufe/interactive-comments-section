import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

import authModule from "./modules/auth";
import commentsModule from "./modules/comments";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = createStore({
  modules: {
    auth: authModule,
    comments: commentsModule,
  },
  plugins: [vuexLocal.plugin],
  getters: {
    getGlobalState(state) {
      return state;
    },
  },
});

export default store;
