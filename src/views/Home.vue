<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png">
    <h1 class="title">Optimized4U Blog</h1>
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue'

export default {
  name: 'home',
  components: {
    Posts
  }
}
</script>
