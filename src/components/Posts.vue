<template>
  <div class="container"
       id="posts">
    <ApolloQuery class="grid-row"
                 :query="require('../graphql/getPosts.gql')">
      <ApolloSubscribeToMore :document="require('../graphql/getLastPost.gql')"
                             :updateQuery="onPostAdded" />
      <template slot-scope="{result: { data, error, loading }}">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error...</div>
        <div v-else-if="data"
             class="card"
             v-for="post in data.posts"
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
    getPost (postSlug) {
      this.$router.push({ name: 'post', params: { slug: postSlug } })
    },
    onPostAdded (previousResult, { subscriptionData }) {
      if (previousResult && previousResult.posts[0].id !== subscriptionData.data.posts[0].id) {
        return {
          posts: [
            ...subscriptionData.data.posts,
            ...previousResult.posts
          ]
        }
      }
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
