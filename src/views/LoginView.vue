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
    async onSubmit(data) {
      try {
        await this.$store.dispatch("login", data);
        this.$router.push("/home");
      } catch (error) {
        // errorMessage.value = error;
        console.log(error);
      }
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
