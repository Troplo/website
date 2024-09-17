import gql from "graphql-tag"

export const AnnouncementsQuery = gql`
  query Announcements($input: AnnouncementsInput!) {
    announcements(input: $input) {
      items {
        id
        title
        description
        createdAt
        updatedAt
        image
        draft
        banner
        bannerText
        bannerExpiry
        bannerType
        flowinityUserId
      }
      pager {
        totalItems
        totalPages
      }
    }
  }
`
