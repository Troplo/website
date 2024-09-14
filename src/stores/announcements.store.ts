import { defineStore } from "pinia"
import {
  AnnouncementsDocument,
  AnnouncementsInput,
  AnnouncementsQuery
} from "@/gql/graphql"
import { nextTick, ref, watch } from "vue"
import { useApolloClient } from "@vue/apollo-composable"
import { useDisplay } from "vuetify"

export const useAnnouncementsStore = defineStore("announcements", () => {
  const banners = ref<AnnouncementsQuery["announcements"]>([])

  async function getAnnouncements(input: AnnouncementsInput = {}) {
    const apolloClient = useApolloClient()
    const { data } = await apolloClient.client.query({
      query: AnnouncementsDocument,
      variables: { input }
    })
    return data.announcements
  }

  const navbarOffset = ref(0)
  const display = useDisplay()

  watch(
    () => [banners.value, display.width.value, display.height.value],
    async () => {
      await nextTick(() => {
        let offset = 64
        for (const banner of banners.value) {
          const element = document.getElementById(`banner-${banner.id}`)
          if (element) {
            offset += element.clientHeight
          }
        }
        navbarOffset.value = offset
      })
    }
  )

  return {
    banners,
    getAnnouncements,
    navbarOffset
  }
})
