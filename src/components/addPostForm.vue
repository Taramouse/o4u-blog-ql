<template>
  <form class="add-post-form"
        @submit.prevent="submit">
    <fieldset class="form">
      <label class="text-left"
             for="title">Title</label>
      <input class="input-title"
             type="text"
             placeholder="title"
             name="title"
             v-model="title">
      <label class="text-left"
             for="content">Content</label>
      <textarea class="input-content"
                type="text"
                placeholder="content"
                name="content"
                v-model="content">
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
              type="submit">Submit</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'addPostForm',
  data () {
    return {
      title: '',
      content: '',
      currentUser: 'google-12132324323'
    }
  },
  methods: {
    submit (e) {
      const { title, content, currentUser: userId } = this
      this.$apollo.mutate({
        mutation: require('@/graphql/addPost.gql'),
        variables: {
          title,
          content,
          userId
        },
        refetchQueries: ['getPosts']
      }).then(data => {
        console.log(data)
      }).catch(error => {
        console.log(error)
      })
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
  font-size: 1.5em;
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
