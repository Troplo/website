import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache
} from "@apollo/client"
import { DefaultApolloClient } from "@vue/apollo-composable"

export default defineNuxtPlugin((app) => {
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: import.meta.env.DEV
      ? "http://localhost:24007/graphql"
      : "https://api.troplo.com/graphql"
  })

  // Cache implementation
  const cache = new InMemoryCache()

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => {
      const token = import.meta.client ? localStorage.getItem("token") : ""
      return {
        headers: {
          ...headers,
          authorization: token
        }
      }
    })
    return forward(operation)
  })

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
  })
  app.vueApp.provide(DefaultApolloClient, apolloClient)
})
