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
html,
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
#app {
  --var-primary-color: hsl(240, 83%, 70%);
  --var-secondary-color: hsl(153, 47%, 49%);
  --var-grey-color: hsl(210, 29%, 24%);
  --var-o4u-red: hsl(0, 84%, 65%);
  --var-o4u-blue: hsl(240, 95%, 65%);
}
#app {
  font-family: "Raleway", sans-serif, Verdana, Geneva, Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--var-grey-color);
}
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
.text-center {
  text-align: center;
}
.text-primary {
  color: var(--var-primary-color);
}
.text-secondary {
  color: var(--var-secondary-color);
}
.text-grey {
  color: var(--var-grey-color);
}
.text-red {
  color: var(--var-o4u-red);
}
.text-blue {
  color: var(--var-o4u-blue);
}
.title {
  font-size: 3.5em;
  font-weight: 200;
}
.sub-title {
  font-size: 0.7em;
}
.btn-primary {
  background: var(--var-primary-color);
  color: white;
  padding: 10px;
  cursor: pointer;
}
.btn-secondary {
  background: var(--var-secondary-color);
  color: white;
  padding: 10px;
  cursor: pointer;
}
</style>
