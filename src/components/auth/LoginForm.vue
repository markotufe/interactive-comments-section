<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        v-model.trim="enteredEmail"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        v-model.trim="enteredPassword"
      />
    </div>
    <button>Login</button>
  </form>
</template>

<script>
export default {
  emits: ["submit-from"],
  data() {
    return {
      enteredEmail: "juliusomo@test.test",
      enteredPassword: "test1234",
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit-from", {
        email: this.enteredEmail,
        password: this.enteredPassword,
      });
    },
  },
};
</script>

<style scoped>
form {
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: 25px;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  font-size: 15px;
  margin-top: 9px;
  padding: 11px;
  color: var(--dark-blue);
  border: 1px solid var(--light-gray);
  border-radius: 2px;
}

input::placeholder {
  color: var(--grayish-blue);
}

label {
  font-size: 15px;
  color: var(--dark-blue);
}

button {
  width: 100%;
  border-radius: 5px;
  border: 0;
  padding: 10px 0;
  background-color: var(--primary-color);
  color: var(--white);
  margin-top: 10px;
}
</style>
