<template>
  <div>
    <img src="../../assets/images/icon-plus.svg" alt="plus" />
    <span>{{ commentScore }}</span>
    <img src="../../assets/images/icon-minus.svg" alt="minus" />
  </div>
</template>

<script>
export default {
  props: ["commentScore"],
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--very-light-gray);
  height: 100px;
  width: 40px;
  border-radius: var(--border-radius);
}
img {
  width: 12px;
  margin: 15px 0;
  cursor: pointer;
}
span {
  color: var(--primary-color);
  font-weight: bold;
}

@media only screen and (max-width: 480px) {
  div {
    flex-direction: row;
    height: 40px;
    width: 100px;
  }

  img {
    margin: 15px 10px;
  }
}
</style>
