import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: import.meta.env.DEV ? "/graphql" : "https://api.troplo.com/graphql"
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

export default apolloClient
