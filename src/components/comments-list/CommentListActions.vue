<template>
  <div v-if="isMyAccount" class="edit-delete-container">
    <div class="edit-delete-action" @click="$emit('toggle-modal')">
      <img
        class="delete-icon"
        src="../../assets/images/icon-delete.svg"
        alt="delete icon"
      />
      <p class="delete-text">Delete</p>
    </div>
    <div class="edit-delete-action" @click="$emit('edit-my-comment')">
      <img
        class="edit-icon"
        src="../../assets/images/icon-edit.svg"
        alt="edit icon"
      />
      <p class="edit-text">Edit</p>
    </div>
  </div>
  <div class="reply-container" v-else @click="$emit('set-selected-reply')">
    <img
      class="reply-icon"
      src="../../assets/images/icon-reply.svg"
      alt="reply icon"
    />
    <p class="reply-text">Reply</p>
  </div>
</template>

<script>
export default {
  props: ["isMyAccount"],
  emits: ["set-selected-reply", "toggle-modal", "edit-my-comment"],
};
</script>

<style scoped>
.edit-delete-container {
  display: flex;
}

.edit-delete-action {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.edit-delete-action:nth-child(1) {
  margin-right: 23px;
}

.delete-text {
  color: var(--soft-red);
  font-size: 15px;
  font-weight: bold;
  margin-top: 1px;
  margin-left: 5px;
}

.delete-text:active {
  color: var(--pale-red);
}

.edit-text {
  color: var(--primary-color);
  font-size: 15px;
  font-weight: bold;
  margin-top: 1px;
  margin-left: 5px;
}

.edit-text:active {
  color: var(--light-blue);
}

.reply-container {
  cursor: pointer;
  display: flex;
}

.reply-icon {
  width: 14px;
  height: 14px;
  margin-right: 5px;
  margin-top: 2px;
}

.reply-text {
  color: var(--primary-color);
  font-weight: bold;
  font-size: 15px;
}

.reply-text:active {
  color: var(--light-blue);
}
</style>
