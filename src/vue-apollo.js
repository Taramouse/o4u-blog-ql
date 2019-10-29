import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const getHeaders = () => {
  const headers = {
    'x-hasura-admin-secret': process.env.VUE_APP_SECRET,
    'content-type': 'application/json'
  }
  return headers
}

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_URL,
  headers: getHeaders()
})

const wsLink = new WebSocketLink({
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
}, wsLink, httpLink)

const cache = new InMemoryCache()

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  link,
  cache
})

export function createProvider () {
  return new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $loadingKey: 'loading'
    }
  })
}
