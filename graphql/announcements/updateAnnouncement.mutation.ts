import gql from "graphql-tag"

const UpdateAnnouncementMutation = gql`
  mutation UpdateAnnouncement($input: UpdateAnnouncement!) {
    updateAnnouncement(input: $input) {
      id
      title
      description
      createdAt
      updatedAt
      image
      content
      flowinityUser {
        id
        username
        avatar
      }
      banner
      bannerText
      bannerExpiry
      bannerType
      flowinityUserId
      draft
    }
  }
`
