<template>
  <form @submit.prevent="submitForm">
    <h1>Login to see content</h1>
  </form>
</template>

<script>
export default {
  methods: {
    submitForm() {
      console.log("forma je potvrdjena");
    },
  },
};
</script>

<style scoped></style>
