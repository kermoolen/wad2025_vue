<template>
  <div class="main-page">
  
    <div class="main-layout">
      <aside class="side-panel left-panel"></aside>
      
      <section class="content-panel">
        <div v-if="posts.length === 0" class="loading">
          Loading posts...
        </div>
        <Post 
          v-for="post in posts" 
          :key="post.id" 
          :postId="post.id" 
        />
        <div class="reset-button-container">
          <button @click="handleResetLikes" class="reset-button">
            Reset All Likes
          </button>
        </div>
      </section>
      
      <aside class="side-panel right-panel"></aside>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Post from '../components/Post.vue'

export default {
  name: 'MainPage',
  components: {
    Post
  },
  computed: {
    ...mapGetters(['getAllPosts']),
    posts() {
      return this.getAllPosts
    }
  },
  methods: {
    ...mapActions(['loadPosts', 'resetAllLikes']),
    handleResetLikes() {
      if (confirm('Are you sure you want to reset all likes to zero?')) {
        this.resetAllLikes()
      }
    }
  },
  mounted() {
    // Load posts when component is mounted
    this.loadPosts()
  }
}
</script>

<style scoped>
.main-page {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.reset-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.reset-button {
  padding: 12px 32px;
  background: #d9534f;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  width: auto;
}

.reset-button:hover {
  background: #c9302c;
  transform: translateY(-2px);
}

.reset-button:active {
  transform: translateY(0);
}

.main-layout {
  display: flex;
  flex: 1;
  gap: 32px;
  width: 100%;
}

.side-panel {
  width: 220px;
  min-width: 120px;
  background: #e0e0e0;
  border-radius: 16px;
  padding: 32px;
}

.content-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 900px) {
  .main-layout {
    flex-direction: column;
  }
  
  .side-panel {
    display: none;
  }
}
</style>