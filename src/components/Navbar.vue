<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/showcase">Showcase</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/admin/add-post">Add Post</router-link>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--var-grey-color);
}

#nav a.router-link-exact-active {
  color: var(--var-secondary-color);
}
</style>
