<template>
  <div class="posts">
    <div v-if="$apollo.queries.posts.loading">Loading...</div>
    <div class="alert-error"
         v-if="error">{{error}}</div>
    <div class="card"
         v-else
         v-for="post in posts"
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
  </div>
</template>

<script>
import gql from 'graphql-tag'
import moment from 'moment'

const GET_MY_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      content
      timestamp
      user {
        firstName
        lastName
      }
    }
  }
`

export default {
  name: 'Posts',
  apollo: {
    posts: {
      query: GET_MY_POSTS,
      error (error) {
        this.error = JSON.stringify(error.message)
      }
    }
  },
  data () {
    return {
      posts: [],
      error: null
    }
  },
  filters: {
    date: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
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
