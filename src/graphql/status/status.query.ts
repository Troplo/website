import gql from "graphql-tag"

export const StatusPageQuery = gql`
  query StatusPage {
    status {
      name
      status
    }
  }
`
