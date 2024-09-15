<template>
  <v-img
    v-if="announcement"
    :src="announcement.image!"
    :alt="announcement.title"
    max-height="300"
    min-height="300"
    width="100%"
    class="d-flex mx-auto"
    aspect-ratio="32/5"
    cover
  />
  <v-container max-width="1400">
    <div v-if="announcement">
      <div>
        <v-card-title class="text-h4 text-wrap text-center">
          {{ announcement.title }}
        </v-card-title>
        <div class="d-flex justify-center">
          <div class="d-flex flex-column align-center">
            <v-avatar size="40">
              <v-img
                v-if="announcement.flowinityUser?.avatar"
                :src="announcement.flowinityUser.avatar"
                :alt="announcement.flowinityUser.username"
              />
            </v-avatar>
            <p class="v-card-subtitle">
              {{ announcement.flowinityUser?.username }}
            </p>
          </div>
          <div class="ml-4">
            <p class="v-card-subtitle">
              {{ dayjs(announcement.createdAt).format("Do of MMMM YYYY") }}
              <small
                v-if="
                  announcement.bannerExpiry &&
                  dayjs(announcement.bannerExpiry).isAfter(dayjs())
                "
              >
                (Expires {{ dayjs(announcement.bannerExpiry).fromNow() }})
              </small>
              <small v-else-if="announcement.bannerExpiry" class="text-red">
                (Expired {{ dayjs(announcement.bannerExpiry).fromNow() }})
              </small>
            </p>
            <v-divider class="my-2" />
            <p
              v-if="announcement.content"
              v-thtml="mdAnnouncements.render(announcement.content)"
            ></p>
          </div>
        </div>
      </div>
    </div>
    <v-skeleton-loader
      v-else
      :loading="true"
      class="mx-auto"
      height="100%"
      type="article"
    />
  </v-container>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue"
import { useRoute, useAsyncData } from "#app"
import { useApolloClient } from "@vue/apollo-composable"
import { AnnouncementDocument, type AnnouncementQuery } from "@/gql/graphql"
import dayjs from "@/lib/dayjs"
import mdAnnouncements from "@/lib/mdAnnouncements"

// Get the current route
const route = useRoute()
const id = ref<string>(route.params.id as string)
const apollo = useApolloClient()

// Fetch announcement data using asyncData for SSR support
const { data: announcement } = await useAsyncData(
  `announcement-${id.value}`,
  async () =>
    apollo.client
      .query({
        query: AnnouncementDocument,
        variables: { announcementId: id.value }
      })
      .then((res) => res.data.announcement as AnnouncementQuery["announcement"])
)

useHead({
  title: `${announcement.value?.title || "Announcement"} - Troplo.com`,
  meta: [
    {
      name: "description",
      content:
        announcement.value?.description || "An update from TroploServices."
    },
    {
      property: "og:title",
      content: `${announcement.value?.title || "Announcement"} - Troplo.com`
    },
    { property: "og:image", content: announcement.value?.image || "" },
    {
      property: "og:description",
      content:
        announcement.value?.description || "An update from TroploServices."
    },
    {
      property: "twitter:card",
      content: "summary_large_image"
    },
    {
      property: "twitter:image",
      content: announcement.value?.image || ""
    }
  ]
})
</script>

<style scoped></style>
