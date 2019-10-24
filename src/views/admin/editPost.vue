<template>
  <div class="edit-post">
    <form id="edit-post-form">
      <ApolloQuery :query="require('@/graphql/getPost.gql')"
                   :variables="{postId: postId}">
        <template slot-scope="{result: {data, error, loading}}">
          <div v-if="success"
               class="alert-success">Post edited.</div>
          <div v-if="loading">loading...</div>
          <div v-else-if="error">{{error}}</div>
          <div class="form"
               v-else-if="data"
               v-for="post in data.posts"
               :key="post.id">
            <label class="text-left"
                   for="title">Title</label>
            <input class="input-title"
                   type="text"
                   name="title"
                   v-model="post.title"
                   required>
            <label class="text-left"
                   for="content">Content</label>
            <textarea class="input-content"
                      type="text"
                      name="content"
                      v-model="post.content"
                      required>
          </textarea>
            <label class="text-left"
                   for="user">Author</label>
            <ApolloQuery :query="require('@/graphql/getUsers.gql')">
              <template slot-scope="{result: {data, loading, error}}">
                <div v-if="loading">Loading Users...</div>
                <div v-else-if="error"
                     class="alert-error">{{error}}</div>
                <div v-else-if="data"
                     class="custom-select">
                  <select v-model="currentUser">
                    <option disabled
                            value="">Select User</option>
                    <option v-for="user in data.users"
                            :key="user.id"
                            :value="user.id">{{`${user.firstName} ${user.lastName}`}}</option>
                  </select>
                </div>
              </template>
            </ApolloQuery>
            <button class="btn btn-primary"
                    :disabled="currentUser === ''"
                    @click.prevent="editPost(post.id, post.title, post.content)">Save Edit</button>
          </div>
        </template>
      </ApolloQuery>
    </form>
  </div>
</template>

<script>
export default {
  name: 'editPost',
  data () {
    return {
      postId: this.$route.params.id,
      posts: {},
      currentUser: '',
      error: null,
      loading: 0,
      success: false
    }
  },
  methods: {
    editPost (postId, postTitle, postContent) {
      this.$apollo.mutate({
        mutation: require('@/graphql/editPost.gql'),
        variables: {
          postId: postId,
          title: postTitle,
          content: postContent,
          currentUser: this.currentUser
        },
        refetchQueries: ['getPosts']
      }).then(
        this.success = true
      ).catch(error => {
        this.error = error
      })
    }
  }
}
</script>

<style>
</style>
