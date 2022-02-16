<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/index";

export default {
  mounted() {
    const unsub = onAuthStateChanged(auth, (user) => {
      this.$store.commit("setAuthIsReady", true);

      const userData = {
        ...user,
        displayName: user?.email?.split("@")[0],
      };

      this.$store.commit("setUser", userData);

      unsub();
    });
    console.log(this.$store.getters.getGlobalState);
  },
};
</script>

<style>
#app {
  background-color: var(--very-light-gray);
  height: 100vh;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}
</style>
