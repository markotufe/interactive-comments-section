import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/global.css";

import BaseButton from "./components/ui/BaseButton.vue";
import BaseModal from "./components/ui/BaseModal.vue";

import store from "./store";
import router from "./router";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-modal", BaseModal);

app.use(router);
app.use(store);

router.isReady().then(function () {
  app.mount("#app");
});
