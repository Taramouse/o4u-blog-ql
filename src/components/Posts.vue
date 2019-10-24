<template>
  <div class="posts">
    <ApolloQuery :query="require('@/graphql/getPosts.gql')"
                 :variables="{limit: limit}">
      <template slot-scope="{result: {data, error, loading}}">
        <div v-if="loading">Loading...</div>
        <div class="alert-error"
             v-else-if="error">{{error}}</div>
        <div class="card"
             v-else-if="data"
             v-for="post in data.posts"
             :key="post.id">
          <img src="https://placeimg.com/300/200/tech"
               alt="placeholder">
          <h3 class="card-title text-primary">{{post.title}}</h3>
          <p class="card-content text-left">{{post.content}}</p>
          <div class="card-footer sub-title">
            <p class="text-left">Created: {{post.timestamp | date('DD MMMM YYYY')}}</p>
            <p class="text-left">Author: {{post.user.firstName}} {{post.user.lastName}}</p>
            <button class="btn btn-warning"
                    v-if="isAdmin"
                    @click="editPost(post.id)">Edit Post</button>
            <button class="btn btn-error"
                    v-if="isAdmin"
                    @click="deletePost(post.id)">Delete</button>
            <button class="btn btn-primary"
                    @click="getPost(post.id)">Read Post</button>
          </div>
        </div>
      </template>
    </ApolloQuery>
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
  methods: {
    getPost (postId) {
      this.$router.push({ name: 'post', params: { id: postId } })
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
