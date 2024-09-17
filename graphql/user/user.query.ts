import gql from "graphql-tag"

const User = gql`
  query User {
    user {
      id
      username
      avatar
    }
  }
`
