<template>
  <div class="blog">
    <h1 class="title">Recent Posts</h1>
    <Posts />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'

export default {
  name: 'blog',
  components: {
    Posts
  }
}
</script>

<style>
</style>
