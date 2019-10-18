<template>
  <form id="form"
        class="add-post-form">
    <ApolloMutation :mutation="require('@/graphql/addPost.gql')"
                    :variables="{title, content, userId: currentUser}"
                    @done="handleDone">
      <template slot-scope="{ mutate, loading, error }">
        <div v-if="loading">loading...</div>
        <div v-else-if="error">{{error}}</div>
        <fieldset class="form">
          <label class="text-left"
                 for="title">Title</label>
          <input class="input-title"
                 type="text"
                 placeholder="Post Title"
                 name="title"
                 v-model="title"
                 required>
          <label class="text-left"
                 for="content">Content</label>
          <textarea class="input-content"
                    type="text"
                    placeholder="Post Content"
                    name="content"
                    v-model="content"
                    required>
      </textarea>
          <label class="text-left"
                 for="user">User ID</label>
          <input class="input-user"
                 type="text"
                 placeholder=""
                 name="user"
                 v-model="currentUser"
                 disabled>
          <button class="btn-primary"
                  :disabled="currentUser === ''"
                  @click="mutate()">Save</button>
        </fieldset>
      </template>
    </ApolloMutation>
  </form>
</template>

<script>
export default {
  name: 'addPostForm',
  data () {
    return {
      title: '',
      content: '',
      currentUser: 'google-12132324323',
      error: null,
      loading: 0
    }
  },
  methods: {
    handleDone () {
      document.getElementById('form').reset()
    }
  }
}
</script>

<style>
.add-post-form {
  margin: 20px;
}
.add-post-form .form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: left;
  justify-content: center;
  border: none;
}
.add-post-form .form .input-title {
  border: none;
  border-bottom: 1px solid green;
  margin-bottom: 10px;
  font-size: 1.5em;
  margin-bottom: 2em;
}
.add-post-form .form .input-content {
  font-family: "Raleway", sans-serif, Verdana, Geneva, Arial;
  font-size: 1.3em;
  width: auto;
  height: 300px;
  margin-bottom: 2em;
}
.add-post-form .form .input-user {
  border: none;
  font-size: 0.7em;
  margin-bottom: 2em;
}
</style>
