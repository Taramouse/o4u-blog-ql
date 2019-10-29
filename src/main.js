import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { dateFilter } from 'vue-date-fns'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

Vue.filter('date', dateFilter)
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
const httpLink = new HttpLink({
  uri: process.env.VUE_APP_URL,
  fetch,
  headers: getHeaders()
})

// Create web socket for subscriptions:
const wslink = new WebSocketLink({
  uri: 'ws://devserver:8080/v1/graphql',
  options: {
    reconnect: true,
    connectionParams () {
      return {
        headers: getHeaders()
      }
    }
  }
})

const link = split(({ query }) => {
  const { kind, operation } = getMainDefinition(query)
  return kind === 'OperationDefinition' && operation === 'subscription'
}, wslink, httpLink)

const client = new ApolloClient({
  link,
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
