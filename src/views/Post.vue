<template>
  <div id="post">
    <ApolloQuery :query="require('@/graphql/getPostBySlug.gql')"
                 :variables="{postSlug: postSlug}">
      <template slot-scope="{result: {data, error, loading}}">
        <div v-if="loading">Loading...</div>
        <div class="alert-error"
             v-else-if="error">{{error}}</div>
        <div v-else-if="data"
             v-for="post in data.posts"
             :key="post.id">
          <h1 class="title">{{post.title}}</h1>
          <img class="main-img"
               src="https://placeimg.com/900/400/tech"
               alt="placeholder">
          <div class="post-content text-left"
               v-html="post.content">
          </div>
          <p>Created on {{post.timestamp | date('DD MMMM YYYY')}}</p>
          <p>By {{post.user.firstName}} {{post.user.lastName}}</p>
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
      postSlug: this.$route.params.slug,
      loading: 0,
      error: null
    }
  }
}
</script>

<style>
</style>
