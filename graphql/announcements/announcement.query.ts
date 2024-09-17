import gql from "graphql-tag"

export const AnnouncementQuery = gql`
  query Announcement($announcementId: String!) {
    announcement(id: $announcementId) {
      id
      title
      description
      draft
      content
      createdAt
      updatedAt
      banner
      bannerType
      bannerText
      bannerExpiry
      image
      flowinityUser {
        username
        avatar
      }
    }
  }
`
