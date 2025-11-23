<template>
  <div class="post" v-if="post">
    <div class="post-header">
      <img src="/images/default_avatar.jpg" alt="Avatar" class="post-avatar">
      <div class="post-meta">
        <span class="post-author">{{ post.author }}</span><br>
        <span class="post-date">{{ formatDate(post.date) }}</span>
      </div>
    </div>
    
    <div class="post-content">
      <p>{{ post.content }}</p>
      <img :src="getImagePath(post.image)" alt="Post image" class="post-image">
    </div>
    
    <div class="post-footer">
      <img 
        src="/images/like.png" 
        alt="Like" 
        class="like-icon" 
        @click="handleLike"
      >
      <span class="like-count">{{ post.likes }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Post',
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getPostById']),
    post() {
      return this.getPostById(this.postId)
    }
  },
  methods: {
    ...mapActions(['incrementLikes']),
    handleLike() {
      this.incrementLikes(this.postId)
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toDateString()
    },
    getImagePath(imageName) {
      // Assumes images are in public/images/ folder
      return `/images/${imageName}`
    }
  }
}
</script>

<style scoped>
.post {
  background: #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.post-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.post-meta {
  display: flex;
  flex-direction: column;
}

.post-author {
  font-weight: bold;
  font-size: 1.1em;
  color: #3a3a3a;
}

.post-date {
  font-size: 0.75em;
  color: #777;
}

.post-content {
  margin-bottom: 16px;
}

.post-content p {
  margin: 0 0 12px 0;
  line-height: 1.5;
  font-size: 0.9em;
}

.post-content .post-image {
  max-width: 75%;
  border-radius: 8px;
  display: block;
}

.post-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.like-icon {
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: transform 0.2s;
}

.like-icon:hover {
  transform: scale(1.2);
}

.like-icon:active {
  transform: scale(0.9);
}

.like-count {
  font-size: 0.9em;
  font-weight: bold;
  color: #555;
}
</style>