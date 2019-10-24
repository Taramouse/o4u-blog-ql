<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/admin/add-post">Add Post</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
html,
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
}
#app {
  /* Vars */
  --var-primary-color: hsl(240, 83%, 70%);
  --var-secondary-color: hsl(153, 47%, 49%);
  --var-grey-color: hsl(210, 29%, 24%);
  --var-o4u-red-color: hsl(0, 84%, 65%);
  --var-o4u-blue-color: hsl(206, 89%, 59%);
  --var-success-color: hsl(120, 46%, 77%);
  --var-error-color: hsla(0, 90%, 50%);
  --var-warning-color: hsl(25, 75%, 50%);
  --var-level-1-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
}
#app {
  font-family: "Raleway", sans-serif, Verdana, Geneva, Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0 1em;
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
/* Typography */
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
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
.text-o4u-red {
  color: var(--var-o4u-red-color);
}
.text-o4u-blue {
  color: var(--var-o4u-blue-color);
}
.text-error {
  color: var(--var-error-color);
}
.title {
  font-size: 3.5em;
  font-weight: 200;
}
.sub-title {
  font-size: 0.7em;
}
/* Alert */
.alert-error {
  display: block;
  padding: 10px;
  border-radius: 10px;
  background: var(--var-error-color);
  color: white;
}
.alert-success {
  display: block;
  padding: 10px;
  border-radius: 10px;
  background: var(--var-success-color);
  color: green;
}
/* Button */
.btn {
  padding: 10px;
  cursor: pointer;
  margin: 0 5px;
}
.btn-primary {
  background: var(--var-primary-color);
  color: white;
}
.btn-primary:hover {
  /* TODO: hover */
}
.btn-secondary {
  background: var(--var-secondary-color);
  color: white;
}
.btn-secondary:hover {
  /* TODO: hover */
}
.btn-error {
  background: var(--var-error-color);
  color: white;
}
.btn-error:hover {
  /* TODO: hover */
}
.btn-warning {
  background: var(--var-warning-color);
  color: white;
}
.btn-warning:hover {
  /* TODO: hover */
}
/* Card */
.card {
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 1em;
  margin: 0.5em;
  display: inline-block;
  width: 312px;
  box-shadow: var(--var-level-1-shadow);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.card .card-title {
  font-size: 2em;
}
/* Level Shadows */
.level-1 {
  box-shadow: var(--var-level-1-shadow);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.level-2 {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.level-3 {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
/* Misc */
.branding {
  display: inline-block;
}
/* Form */
.form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: left;
  justify-content: center;
  border: none;
}
.form .input-title {
  border: none;
  border-bottom: 1px solid green;
  margin-bottom: 10px;
  font-size: 1.5em;
  margin-bottom: 2em;
}
.form .input-content {
  font-family: "Raleway", sans-serif, Verdana, Geneva, Arial;
  font-size: 1.3em;
  width: auto;
  height: 250px;
  margin-bottom: 2em;
}
.form .custom-select {
  display: relative;
  text-align: left;
  padding: 10px 0;
  margin-bottom: 2em;
  font-family: "Raleway", sans-serif, Verdana, Geneva, Arial;
}
.form .custom-select > select {
  width: 200px;
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
}
/* Screen breaks */
@media only screen and (min-width: 600px) {
  .branding {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
