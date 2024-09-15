import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
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

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache
  })
  app.vueApp.provide(DefaultApolloClient, apolloClient)
})
