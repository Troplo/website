import { defineStore } from "pinia"
import { Announcement, AnnouncementsDocument } from "@/gql/graphql"
import { ref } from "vue"
import { useApolloClient } from "@vue/apollo-composable"

export const useAnnouncementsStore = defineStore("announcements", () => {
  const banners = ref<Announcement[]>([])

  async function getBanners() {
    const apolloClient = useApolloClient()
    const { data } = await apolloClient.client.query({
      query: AnnouncementsDocument,
      variables: {
        input: {
          banner: true
        }
      }
    })
    banners.value = data.announcements
  }

  return {
    banners,
    getBanners
  }
})
