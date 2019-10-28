<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
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
  --var-lightgrey-color: hsl(0, 0%, 83%);
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
  margin: 0;
  text-align: center;
  color: var(--var-grey-color);
}
#home,
#showcase {
  min-height: 73vh;
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
.main-content {
  max-width: 900px;
  margin: 0 auto;
}
.main-content .tagline {
  padding: 1em 0;
  font-size: 2em;
  font-weight: 200;
}
.main-content p {
  font-size: 1.6em;
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
  border: none;
}
.btn:hover {
  opacity: 0.75;
}
.btn:disabled {
  cursor: not-allowed;
  background: var(--var-lightgrey-color);
}
.btn-primary {
  background: var(--var-primary-color);
  color: white;
}
.btn-secondary {
  background: var(--var-secondary-color);
  color: white;
}
.btn-error {
  background: var(--var-error-color);
  color: white;
}
.btn-warning {
  background: var(--var-warning-color);
  color: white;
}
/* Posts layout containers */
#posts .container {
  max-width: 1335px;
  margin: 0 auto;
}
#posts .grid-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
/* Post layout */
#post {
  margin: 0 2em;
}
#post .main-img {
  width: 100%;
  height: auto;
}
#post .post-content {
  font-size: 1.6em;
}
/* Card */
.card {
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 10px;
  margin: 0.5em;
  flex-basis: 20%;
  position: relative;
  width: 312px;
  height: 480px;
  box-shadow: var(--var-level-1-shadow);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.card .card-title {
  font-size: 2em;
}
.card .card-content {
  height: 58px;
  overflow: hidden;
}
.card .card-footer {
  display: flex;
  justify-content: space-around;
}
.card .card-actions {
  margin-top: 30px;
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
.add-post-form {
  margin: 20px;
}
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
/* Footer */
#footer {
  margin-top: 2em;
  padding: 2em;
  color: var(--var-grey-color);
  background: var(--var-o4u-blue-color);
}
/* Screen breaks */
@media (min-width: 600px) {
  .branding {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1333px) {
  .card {
    flex-basis: 20%;
  }
}
@media (max-width: 1073px) {
  .card {
    flex-basis: 33.33%;
  }
}
@media (max-width: 815px) {
  .card {
    flex-basis: 50%;
  }
}
@media (max-width: 555px) {
  .card {
    flex-basis: 80%;
  }
}
</style>
