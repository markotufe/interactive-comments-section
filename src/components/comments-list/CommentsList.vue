<template>
  <teleport to="body">
    <base-modal @close="toggleModal" :open="isModalVisible">
      <div class="modal-content">
        <h2 class="modal-heading">Delete comment</h2>
        <p class="modal-text">
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>
      </div>

      <div class="modal-buttons">
        <base-button @click="toggleModal" class="modal-button cancel-button">
          No, cancel
        </base-button>
        <base-button @click="deleteComment" class="modal-button delete-button">
          Yes, delete
        </base-button>
      </div>
    </base-modal>
  </teleport>
  <div class="comments-part">
    <template v-for="comment in comments" :key="comment.id">
      <comment-card class="commentCard">
        <div class="cardLeft">
          <vote-comment :comment-score="comment.score"></vote-comment>
          <comment-list-actions
            :is-my-account="checkReplyActions(comment?.user?.username)"
            @set-selected-reply="setSelectedReply(comment)"
            @toggle-modal="toggleModal"
            class="mobileEditActions"
          ></comment-list-actions>
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
            <comment-list-actions
              :is-my-account="checkReplyActions(comment?.user?.username)"
              @set-selected-reply="setSelectedReply(comment)"
              @toggle-modal="toggleModal"
              class="desktopEditActions"
            ></comment-list-actions>
          </div>
          <div class="cardRightBottom">
            <p class="commentText parentCommentText">{{ comment.content }}</p>
          </div>
        </div>
      </comment-card>
      <make-comment
        v-if="checkCommentForm(comment?.id)"
        class="replyCommentContainer"
        :currentUser="currentUser"
        button-text="Reply"
      ></make-comment>
      <div class="childCommentContainer" v-if="comment.replies.length > 0">
        <div class="verticalLine"></div>
        <template v-for="(reply, index) in comment.replies" :key="reply.id">
          <comment-card class="childCard commentCard" :style="childCard(index)">
            <div class="cardLeft">
              <vote-comment :comment-score="comment.score"></vote-comment>
              <comment-list-actions
                :is-my-account="checkReplyActions(reply?.user?.username)"
                @set-selected-reply="setSelectedReply(reply)"
                @toggle-modal="toggleModal"
                class="mobileEditActions"
              ></comment-list-actions>
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
                <comment-list-actions
                  :is-my-account="checkReplyActions(reply?.user?.username)"
                  @set-selected-reply="setSelectedReply(reply)"
                  @toggle-modal="toggleModal"
                  class="desktopEditActions"
                ></comment-list-actions>
              </div>
              <div class="cardRightBottom">
                <p class="commentText childCommentText">
                  <span class="replyingTo">@{{ reply.replyingTo }}</span>
                  {{ reply.content }}
                </p>
              </div>
            </div>
          </comment-card>
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
import VoteComment from "./VoteComment.vue";
import MakeComment from "./MakeComment.vue";
import CommentListActions from "./CommentListActions.vue";
import CommentCard from "./CommentCard.vue";

export default {
  components: {
    VoteComment,
    MakeComment,
    CommentListActions,
    CommentCard,
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

<style scoped>
@import url("../../styles/comment-list.css");
</style>
