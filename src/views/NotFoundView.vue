<template>
  <div>
    <h1>Route not found</h1>
    <router-link to="/">Go to home</router-link>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

h1 {
  margin-bottom: 10px;
  font-size: 25px;
}

a {
  text-decoration: none;
  font-size: 17px;
  color: var(--primary-color);
  font-weight: bold;
}
</style>
