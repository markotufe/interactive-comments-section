import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/global.css";

import BaseButton from "./components/ui/BaseButton.vue";
import BaseModal from "./components/ui/BaseModal.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-modal", BaseModal);

app.use(router);

app.mount("#app");
