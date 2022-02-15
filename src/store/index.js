import { createStore } from "vuex";

import authModule from "./modules/auth";
import commentsModule from "./modules/comments";

const store = createStore({
  modules: {
    auth: authModule,
    comments: commentsModule,
  },
});

export default store;
