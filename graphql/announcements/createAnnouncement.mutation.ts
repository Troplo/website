import gql from "graphql-tag"

const CreateAnnouncementMutation = gql`
  mutation CreateAnnouncement($input: CreateAnnouncement!) {
    createAnnouncement(input: $input) {
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
