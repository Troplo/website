import gql from "graphql-tag"

export const AnnouncementQuery = gql`
  query Announcement($announcementId: String, $showOnMainPage: Boolean) {
    announcement(id: $announcementId, showOnMainPage: $showOnMainPage) {
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
      bannerIcon
      showOnMainPage
      flowinityUser {
        username
        avatar
      }
    }
  }
`
