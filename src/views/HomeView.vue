<template>
  <div class="view-container">
    <comments-list
      :comments="this.comments"
      :current-user="this.currentUser"
    ></comments-list>
    <make-comment :current-user="this.currentUser"></make-comment>
  </div>
</template>

<script>
import MakeComment from "../components/comments-list/MakeComment.vue";
import CommentsList from "../components/comments-list/CommentsList.vue";
import dummyData from "../assets/data.json";

export default {
  components: {
    MakeComment,
    CommentsList,
  },
  data() {
    return {
      comments: dummyData.comments,
      currentUser: dummyData.currentUser,
    };
  },
};
</script>

<style scoped>
.view-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 730px;
  margin: 0 auto;
}
</style>
