<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  min-width: 104px;
  min-height: 48px;
  border-radius: var(--border-radius);
  border: 0;
  background-color: var(--primary-color);
  text-transform: uppercase;
  color: var(--white);
  cursor: pointer;
  font-weight: bold;
}
</style>
