import gql from "graphql-tag"

export const AnnouncementsQuery = gql`
  query Announcements($input: AnnouncementsInput!) {
    announcements(input: $input) {
      id
      title
      description
      createdAt
      updatedAt
      image
      banner
      bannerText
      bannerExpiry
      bannerType
      flowinityUserId
    }
  }
`
