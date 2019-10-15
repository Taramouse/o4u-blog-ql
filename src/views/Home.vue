<template>
  <div class="home">
    <img alt=")4U logo"
         src="../assets/inline/cover.png"
         width=600px
         height="auto">
    <h1 class="title">Blog</h1>
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
