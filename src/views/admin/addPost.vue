<template>
  <div class="add-post">
    Add New Post
    <AddPostForm />
  </div>
</template>

<script>
import AddPostForm from '@/components/AddPostForm'

export default {
  name: 'addPost',
  components: {
    AddPostForm
  }
}
</script>

<style>
</style>
