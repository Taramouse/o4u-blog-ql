<template>
  <form id="form"
        class="add-post-form">
    <ApolloMutation :mutation="require('@/graphql/addPost.gql')"
                    :variables="{title, content, slug, userId: currentUser}"
                    @done="handleDone">
      <template slot-scope="{ mutate, loading, error }">
        <div v-if="loading">loading...</div>
        <div v-else-if="error">{{error}}</div>
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
                 for="slug">Post Slug (auto)</label>
          <input class="input-slug"
                 type="text"
                 placeholder=""
                 name="slug"
                 :value="slug"
                 disabled>
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
                  :disabled="currentUser === '' || title === '' || content === ''"
                  @click.prevent="mutate()">Save</button>
        </div>
      </template>
    </ApolloMutation>
  </form>
</template>

<script>
import slug from 'slug'

export default {
  name: 'addPostForm',
  data () {
    return {
      title: '',
      content: '',
      currentUser: '',
      error: null,
      loading: 0
    }
  },
  computed: {
    slug () {
      return slug(this.title, ({ lower: true }))
    }
  },
  methods: {
    handleDone () {
      this.$emit('NEW_POST_SAVED')
      this.$router.push({ name: 'blog' })
    }
  }
}
</script>

<style>
</style>
