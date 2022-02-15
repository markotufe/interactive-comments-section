<template>
  <div>
    <div class="make-comment desktop">
      <img :src="loadImage" alt="user" />
      <textarea placeholder="Add a comment..."></textarea>
      <base-button>{{ buttonText }}</base-button>
    </div>
    <div class="make-comment mobile">
      <textarea placeholder="Add a comment..."></textarea>
      <div class="mobile-comment-contet">
        <img :src="loadImage" alt="user" />
        <base-button>{{ buttonText }}</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      required: false,
    },
    buttonText: {
      required: false,
      default: "Send",
    },
  },
  computed: {
    loadImage() {
      return require(`../../assets${this.currentUser?.image?.png?.slice(1)}`);
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
  gap: 15px;
  padding: 24px;
  display: flex;
}

.desktop {
  align-items: flex-start;
}

.mobile {
  flex-direction: column;
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

button:active {
  background-color: var(--light-blue);
}

.mobile {
  display: none;
}

@media only screen and (max-width: 480px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: flex;
  }

  .mobile-comment-contet {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
