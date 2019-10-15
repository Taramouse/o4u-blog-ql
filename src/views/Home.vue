<template>
  <div class="home">
    <span class="branding"><img alt="Optimized4U Logo"
           src="../assets/profile.png"
           width=200px
           height="auto">
      <h1 class="title"><span class="text-o4u-blue">Optimized</span><span class="text-o4u-red">4</span><span class="text-o4u-blue">U</span></h1>
    </span>
    <h1 class="title">Recent Posts</h1>
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
