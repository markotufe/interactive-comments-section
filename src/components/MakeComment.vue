<template>
  <div class="make-comment">
    <img :src="loadImage" alt="juliu somo" />
    <textarea placeholder="Add a comment..."></textarea>
    <base-button>Send</base-button>
  </div>
</template>

<script>
export default {
  props: ["currentUser"],
  computed: {
    loadImage() {
      return require(`../assets${this.currentUser.image.png.slice(1)}`);
    },
  },
};
</script>

<style scoped>
.make-comment {
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
  background: var(--white);
  min-height: 144px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 24px;
}
img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
textarea {
  flex: 1;
  min-height: 96px;
  border-radius: var(--border-radius);
  border-color: var(--light-gray);
  background-color: transparent;
  padding-left: 15px;
  padding-top: 15px;
  resize: none;
}
textarea::-webkit-input-placeholder {
  color: var(--grayish-blue);
}
</style>
