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
          <h3 class="card-title text-primary">{{post.title}}</h3>
          <p class="card-content">{{post.content}}</p>
          <div class="card-footer sub-title">
            <p>Created: {{post.timestamp | date}}</p>
            <p>Author: {{post.user.firstName}} {{post.user.lastName}}</p>
            <button class="btn-primary"
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
      limit: 3
    }
  },
  methods: {
    getPost (postId) {
      this.$router.push({ name: 'post', params: { id: postId } })
    }
  }
}
</script>

<style>
</style>
