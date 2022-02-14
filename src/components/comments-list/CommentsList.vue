<template>
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
            <div class="replyContainer">
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
      <div class="childCommentContainer" v-if="comment.replies.length > 0">
        <div class="verticalLine"></div>
        <base-card
          class="childCard commentCard"
          v-for="(reply, index) in comment.replies"
          :key="reply.id"
          :style="childCard(index)"
          ref="infoBox"
        >
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
                <p class="username" :style="checkMargin(reply?.user?.username)">
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
                <div class="editDeleteAction">
                  <img
                    class="deleteIcon"
                    src="../../assets/images/icon-delete.svg"
                    alt="delete"
                  />
                  <p class="deleteText">Delete</p>
                </div>
                <div class="editDeleteAction">
                  <img
                    class="editIcon"
                    src="../../assets/images/icon-edit.svg"
                    alt="delete"
                  />
                  <p class="editText">Edit</p>
                </div>
              </div>
              <div class="replyContainer" v-else>
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
      </div>
    </template>
  </div>
</template>
<script>
import VoteComment from "../ui/VoteComment.vue";

export default {
  components: {
    VoteComment,
  },
  props: ["comments", "currentUser"],
  mounted() {
    this.getDivHeight();
  },
  data() {
    return {
      divHeight: 0,
    };
  },
  methods: {
    checkMargin(username) {
      return {
        marginRight: username === this.currentUser?.username ? "6px" : "15px",
      };
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
.editText {
  color: var(--primary-color);
  font-size: 15px;
  font-weight: bold;
  margin-top: 1px;
  margin-left: 5px;
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
</style>
