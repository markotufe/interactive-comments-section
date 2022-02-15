<template>
  <teleport to="body">
    <base-modal @close="toggleModal" :open="isModalVisible">
      <div class="modalContent">
        <h2 class="modalHeading">Delete comment</h2>
        <p class="modalText">
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>
      </div>

      <div class="modalButtons">
        <base-button @click="toggleModal" class="modalButton cancelButton">
          No, cancel
        </base-button>
        <base-button @click="deleteComment" class="modalButton deleteButton">
          Yes, delete
        </base-button>
      </div>
    </base-modal>
  </teleport>
  <div class="comments">
    <template v-for="comment in comments" :key="comment.id">
      <base-card class="commentCard">
        <div class="cardLeft">
          <vote-comment :comment-score="comment.score"></vote-comment>
        </div>
        <div class="cardRight">
          <div class="cardRightTop">
            <div class="userImageContainer">
              <img
                :src="loadImage(comment?.user?.image?.png)"
                alt="user"
                class="userImage"
              />
              <p class="username">{{ comment?.user?.username }}</p>
              <p class="createdAt">{{ comment?.createdAt }}</p>
            </div>
            <div class="replyContainer" @click="setSelectedReply(comment)">
              <img
                class="replyImage"
                src="../../assets/images/icon-reply.svg"
                alt="reply"
              />
              <p class="replyText">Reply</p>
            </div>
          </div>
          <div class="cardRightBottom">
            <p class="commentText parentCommentText">{{ comment.content }}</p>
          </div>
        </div>
      </base-card>
      <make-comment
        v-if="checkCommentForm(comment?.id)"
        class="replyCommentContainer"
        :currentUser="currentUser"
        button-text="Reply"
      ></make-comment>
      <div class="childCommentContainer" v-if="comment.replies.length > 0">
        <div class="verticalLine"></div>
        <template v-for="(reply, index) in comment.replies" :key="reply.id">
          <base-card class="childCard commentCard" :style="childCard(index)">
            <div class="cardLeft">
              <vote-comment :comment-score="comment.score"></vote-comment>
            </div>
            <div class="cardRight">
              <div class="cardRightTop">
                <div class="userImageContainer">
                  <img
                    :src="loadImage(reply?.user?.image?.png)"
                    alt="user"
                    class="userImage"
                  />
                  <p
                    class="username"
                    :style="checkMargin(reply?.user?.username)"
                  >
                    {{ reply?.user?.username }}
                  </p>
                  <span
                    class="userBadge"
                    v-if="checkReplyActions(reply?.user?.username)"
                    >you</span
                  >
                  <p class="createdAt">{{ reply?.createdAt }}</p>
                </div>
                <div
                  v-if="checkReplyActions(reply?.user?.username)"
                  class="editDeleteContainer"
                >
                  <div class="editDeleteAction" @click="toggleModal">
                    <img
                      class="deleteIcon"
                      src="../../assets/images/icon-delete.svg"
                      alt="delete"
                    />
                    <p class="deleteText">Delete</p>
                  </div>
                  <div
                    class="editDeleteAction"
                    @click="setSelectedReply(reply)"
                  >
                    <img
                      class="editIcon"
                      src="../../assets/images/icon-edit.svg"
                      alt="delete"
                    />
                    <p class="editText">Edit</p>
                  </div>
                </div>
                <div
                  class="replyContainer"
                  v-else
                  @click="setSelectedReply(reply)"
                >
                  <img
                    class="replyImage"
                    src="../../assets/images/icon-reply.svg"
                    alt="reply"
                  />
                  <p class="replyText">Reply</p>
                </div>
              </div>
              <div class="cardRightBottom">
                <p class="commentText childCommentText">
                  <span class="replyingTo">@{{ reply.replyingTo }}</span>
                  {{ reply.content }}
                </p>
              </div>
            </div>
          </base-card>
          <make-comment
            v-if="checkCommentForm(reply?.id)"
            class="replyCommentChildContainer"
            :currentUser="currentUser"
            :button-text="isMyAccount(reply?.user.username) ? 'Edit' : 'Reply'"
          ></make-comment>
        </template>
      </div>
    </template>
  </div>
</template>
<script>
import VoteComment from "../ui/VoteComment.vue";
import MakeComment from "../MakeComment.vue";

export default {
  components: {
    VoteComment,
    MakeComment,
  },
  props: ["comments", "currentUser"],
  data() {
    return {
      divHeight: 0,
      selectedReply: {},
      isReplyActive: false,
      isModalVisible: false,
    };
  },
  methods: {
    checkCommentForm(commentId) {
      return this.selectedReply?.id === commentId && this.isReplyActive;
    },
    checkMargin(username) {
      return {
        marginRight: this.isMyAccount(username) ? "6px" : "15px",
      };
    },
    isMyAccount(username) {
      return username === this.currentUser?.username;
    },
    checkReplyActions(username) {
      if (username === this.currentUser?.username) return true;
      else return false;
    },
    childCard(index) {
      const marginTop = index === 0 ? 0 : 10;
      return { marginTop: `${marginTop}px !important` };
    },
    loadImage(image) {
      return require(`../../assets${image.slice(1)}`);
    },
    setSelectedReply(replyData) {
      this.selectedReply = replyData;
      this.isReplyActive = !this.isReplyActive;
      if (!this.isReplyActive) {
        this.selectedReply = {};
      }
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    deleteComment() {
      this.isModalVisible = !this.isModalVisible;
    },
  },
};
</script>
<style>
.comments {
  flex: 1;
  overflow-y: scroll;
  margin-bottom: 20px;
}
.commentCard {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  min-height: 77px;
  padding: 24px;
}
.childCommentContainer {
  position: relative;
  margin-top: 10px;
}
.childCard {
  margin-left: 80px;
  margin-top: 0px !important;
}
.verticalLine {
  border-left: 2px solid var(--light-gray);
  position: absolute;
  left: 42px;
  height: 100%;
}
.replyingTo {
  color: var(--primary-color);
  font-weight: bold;
}
.userImageContainer {
  display: flex;
  align-items: center;
}
.userImage {
  width: 32px;
  height: 32px;
  object-fit: cover;
}
.cardLeft {
  flex: 0.01;
}
.cardRight {
  flex: 0.99;
  margin-left: 20px;
}
.cardRightTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.replyContainer {
  display: flex;
}

.replyText:active {
  color: var(--light-blue);
}

.username {
  font-size: 14px;
  font-weight: bold;
  margin: 0 15px;
  color: var(--dark-blue);
}
.createdAt {
  font-size: 14px;
  color: var(--grayish-blue);
}
.commentText {
  font-size: 15px;
  color: var(--grayish-blue);
  line-height: 1.7;
}

.childCommentText {
  width: 95%;
}

.replyContainer {
  cursor: pointer;
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
.cardRightBottom {
  margin-top: 12px;
}

.parentCommentText {
  width: 95%;
}

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

.userBadge {
  background: var(--primary-color);
  color: var(--white);
  font-size: 14px;
  text-align: center;
  margin-right: 15px;
  border-radius: 2px;
  width: 36px;
  height: 19px;
}
.replyCommentContainer {
  margin-top: 10px;
}

.replyCommentChildContainer {
  margin-top: 10px;
  margin-left: 80px;
}

.modalHeading {
  font-size: 20px;
  color: var(--dark-blue);
  font-weight: bold;
  margin-bottom: 20px;
}

.modalText {
  font-weight: normal;
  font-size: 14px;
  line-height: 1.7;
  width: 85%;
  color: var(--grayish-blue);
}

.modalButtons {
  margin-top: 20px;
}

.modalButton {
  width: 161px;
  font-size: 14px;
}

.modalButton:nth-child(1) {
  margin-right: 10px;
}

.cancelButton {
  background-color: var(--grayish-blue) !important;
}

.deleteButton {
  background-color: var(--soft-red) !important;
}

.deleteButton:active {
  background-color: var(--pale-red) !important;
}

.cancelButton:active {
  background-color: var(--light-gray) !important;
}
</style>
