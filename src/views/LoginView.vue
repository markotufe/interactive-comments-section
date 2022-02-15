<template>
  <div>
    <h1>Hello, I'm Login!</h1>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "../components/auth/LoginForm.vue";

export default {
  components: {
    LoginForm,
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
