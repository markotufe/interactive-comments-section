<template>
  <p class="error-message">{{ errorMessage }}</p>
</template>

<script>
export default {
  props: {
    errorMessage: {
      required: false,
      default: "Please try again",
    },
  },
};
</script>

<style scoped>
.error-message {
  color: var(--soft-red);
  text-align: center;
}
</style>
