<template>
  <div class="container"
       id="posts">
    <div v-if="$apollo.loading">Loading...</div>
    <div class="alert-error"
         v-else-if="$apollo.error">{{error}}</div>
    <div class="card"
         v-for="post in posts"
         :key="post.id">
      <img src="https://placeimg.com/300/200/tech"
           alt="placeholder">
      <h3 class="card-title text-primary">{{post.title}}</h3>
      <p class="card-content text-left"
         v-html="post.content"></p>
      <div class="card-footer sub-title">
        <span>Created: {{post.timestamp | date('DD MMMM YYYY')}}</span>
        <span>Author: {{post.user.firstName}} {{post.user.lastName}}</span>
      </div>
      <div class="card-actions">
        <button class="btn btn-warning"
                v-if="isAdmin"
                @click="editPost(post.id)">Edit Post</button>
        <button class="btn btn-error"
                v-if="isAdmin"
                @click="deletePost(post.id)">Delete</button>
        <button class="btn btn-primary"
                @click="getPost(post.slug)">Read Post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'posts',
  data () {
    return {
      posts: [],
      error: null,
      loading: 0,
      limit: 6,
      isAdmin: true
    }
  },
  apollo: {
    $subscribe: {
      posts: {
        query: require('@/graphql/getPosts.gql'),
        result ({ data }) {
          this.posts = data.posts
        }
      }
    }
  },
  methods: {
    getPost (postSlug) {
      this.$router.push({ name: 'post', params: { slug: postSlug } })
    },
    editPost (postId) {
      this.$router.push({ name: 'editPost', params: { id: postId } })
    },
    deletePost (postId) {
      this.$apollo.mutate({
        mutation: require('@/graphql/deletePost.gql'),
        variables: {
          postId: postId
        },
        refetchQueries: ['getPosts']
      }).catch(error => {
        this.error = error
      })
    }
  }
}
</script>

<style>
</style>
