import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filters from './filters'

import VueApollo from 'vue-apollo'

import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use(filters)
Vue.use(VueApollo)

Vue.config.productionTip = false

const getHeaders = () => {
  const headers = {
    'x-hasura-admin-secret': process.env.VUE_APP_SECRET,
    'content-type': 'application/json'
  }
  return headers
}
// Create an http link:
const link = new HttpLink({
  uri: process.env.VUE_APP_URL,
  fetch,
  headers: getHeaders()
})
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  })
})

const apolloProvider = new VueApollo({
  defaultClient: client
})

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
