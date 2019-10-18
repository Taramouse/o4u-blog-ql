<template>
  <div class="post">
    <h1>{{posts[0].title}}</h1>
    <p>{{posts[0].content}}</p>
    <p>Created: {{posts[0].timestamp | datetime}}</p>
    <p>Author: {{posts[0].user.firstName}} {{posts[0].user.lastName}}</p>
  </div>
</template>

<script>
import gql from 'graphql-tag'
// import moment from 'moment'

const GET_POST = gql`
  query getPost {
    posts(where: {id: {_eq: "83557d4a-45d2-45e1-aa56-ea6d02f99968"}}) {
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
  name: 'post',
  // TODO: Work out correct way to get single post without console errors.
  apollo: {
    posts: {
      query: GET_POST,
      error (error) {
        this.error = JSON.stringify(error.message)
      }
    }
  },
  data () {
    return {
      posts: [],
      postId: this.$route.params.id,
      error: null
    }
  }
}
</script>

<style>
</style>
