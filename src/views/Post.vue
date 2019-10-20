<template>
  <div class="post">
    <ApolloQuery :query="require('@/graphql/getPost.gql')"
                 :variables="{postId: postId}">
      <template slot-scope="{result: {data, error, loading}}">
        <div v-if="loading">Loading...</div>
        <div class="alert-error"
             v-else-if="error">{{error}}</div>
        <div v-else-if="data"
             v-for="post in data.posts"
             :key="post.id">
          <h1 class="title">{{post.title}}</h1>
          <img src="https://placeimg.com/900/400/tech"
               alt="placeholder">
          <p>{{post.content}}</p>
          <p>Created on {{post.timestamp | date('DD MMMM YYYY')}}</p>
          <p>Author {{post.user.firstName}} {{post.user.lastName}}</p>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
      posts: [],
      postId: this.$route.params.id,
      loading: 0,
      error: null
    }
  }
}
</script>

<style>
</style>
