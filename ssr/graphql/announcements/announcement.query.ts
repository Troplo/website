import gql from "graphql-tag"

export const AnnouncementQuery = gql`
  query Announcement($announcementId: String!) {
    announcement(id: $announcementId) {
      id
      title
      description
      content
      createdAt
      updatedAt
      bannerExpiry
      image
      flowinityUser {
        username
        avatar
      }
    }
  }
`
