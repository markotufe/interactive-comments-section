<template>
  <div>
    <login-form @submit-from="onSubmit"></login-form>
  </div>
</template>

<script>
import LoginForm from "../components/auth/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
  methods: {
    onSubmit(data) {
      this.$store.dispatch("login", data);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
</style>
