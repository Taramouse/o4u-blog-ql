<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  --var-primary-color: hsl(240, 83%, 70%);
  --var-secondary-color: hsl(153, 47%, 49%);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: var(--var-secondary-color);
}
.text-primary {
  color: var(--var-primary-color);
}
.text-secondary {
  color: var(--var-secondary-color);
}
.text-center {
  text-align: center;
}
.btn-primary {
  background: var(--var-primary-color);
  color: white;
  padding: 10px;
  cursor: pointer;
}
</style>
