import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  
  mutations: {
    // Set posts from JSON file
    SET_POSTS(state, posts) {
      state.posts = posts.map((post, index) => ({
        ...post,
        id: index + 1,
        likes: 0
      }))
    },
    
    // Increment likes for a specific post (Task 4.2)
    INCREMENT_LIKES(state, postId) {
      const post = state.posts.find(p => p.id === postId)
      if (post) {
        post.likes++
      }
    },
    
    // Reset all likes to zero (Task 4.3)
    RESET_ALL_LIKES(state) {
      state.posts.forEach(post => {
        post.likes = 0
      })
    }
  },
  
  actions: {
    // Load posts from JSON file
    async loadPosts({ commit }) {
      try {
        const response = await fetch('json/posts.json')
        const posts = await response.json()
        commit('SET_POSTS', posts)
      } catch (error) {
        console.error('Error loading posts:', error)
      }
    },
    
    incrementLikes({ commit }, postId) {
      commit('INCREMENT_LIKES', postId)
    },
    
    resetAllLikes({ commit }) {
      commit('RESET_ALL_LIKES')
    }
  },
  
  getters: {
    // Get all posts
    getAllPosts: state => state.posts,
    
    // Get a specific post by ID
    getPostById: state => id => {
      return state.posts.find(post => post.id === id)
    }
  }
})
