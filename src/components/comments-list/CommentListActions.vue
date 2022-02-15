<template>
  <div v-if="isMyAccount" class="editDeleteContainer">
    <div class="editDeleteAction" @click="$emit('toggleModal')">
      <img
        class="deleteIcon"
        src="../../assets/images/icon-delete.svg"
        alt="delete"
      />
      <p class="deleteText">Delete</p>
    </div>
    <div class="editDeleteAction" @click="$emit('setSelectedReply')">
      <img
        class="editIcon"
        src="../../assets/images/icon-edit.svg"
        alt="delete"
      />
      <p class="editText">Edit</p>
    </div>
  </div>
  <div class="replyContainer" v-else @click="$emit('setSelectedReply')">
    <img
      class="replyImage"
      src="../../assets/images/icon-reply.svg"
      alt="reply"
    />
    <p class="replyText">Reply</p>
  </div>
</template>

<script>
export default {
  props: ["isMyAccount"],
  emits: ["setSelectedReply", "toggleModal"],
};
</script>

<style scoped>
.editDeleteContainer {
  display: flex;
}

.editDeleteAction {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.editDeleteAction:nth-child(1) {
  margin-right: 23px;
}

.deleteText {
  color: var(--soft-red);
  font-size: 15px;
  font-weight: bold;
  margin-top: 1px;
  margin-left: 5px;
}

.deleteText:active {
  color: var(--pale-red);
}

.editText {
  color: var(--primary-color);
  font-size: 15px;
  font-weight: bold;
  margin-top: 1px;
  margin-left: 5px;
}

.editText:active {
  color: var(--light-blue);
}

.replyContainer {
  cursor: pointer;
  display: flex;
}

.replyImage {
  width: 14px;
  height: 14px;
  margin-right: 5px;
  margin-top: 2px;
}

.replyText {
  color: var(--primary-color);
  font-weight: bold;
  font-size: 15px;
}

.replyText:active {
  color: var(--light-blue);
}
</style>
