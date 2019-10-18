<template>
  <div class="add-post">
    Add New Post
    <AddPostForm />
  </div>
</template>

<script>
import AddPostForm from '@/components/addPostForm'

export default {
  name: 'addPost',
  components: {
    AddPostForm
  }
}
</script>

<style>
</style>
