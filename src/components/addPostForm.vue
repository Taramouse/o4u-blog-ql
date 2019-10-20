<template>
  <form id="form"
        class="add-post-form">
    <ApolloMutation :mutation="require('@/graphql/addPost.gql')"
                    :variables="{title, content, userId: currentUser}"
                    @done="handleDone">
      <template slot-scope="{ mutate, loading, error }">
        <div v-if="loading">loading...</div>
        <div v-else-if="error">{{error}}</div>
        <div v-if="success"
             class="alert-success">Post saved.</div>
        <div class="form">
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
          <button class="btn-primary"
                  :disabled="currentUser === ''"
                  @click.prevent="mutate()">Save</button>
        </div>
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
      currentUser: '',
      error: null,
      loading: 0,
      success: false
    }
  },
  methods: {
    handleDone () {
      this.success = true
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
  height: 250px;
  margin-bottom: 2em;
}
.add-post-form .form .custom-select {
  display: relative;
  text-align: left;
  padding: 10px 0;
  margin-bottom: 2em;
  font-family: "Raleway", sans-serif, Verdana, Geneva, Arial;
}
.add-post-form .form .custom-select > select {
  width: 200px;
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
}
</style>
