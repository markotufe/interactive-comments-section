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
  },
};
</script>
