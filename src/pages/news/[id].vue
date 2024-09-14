<template>
  <v-img
    v-if="announcement"
    :src="announcement.image!"
    :alt="announcement.title"
    height="300"
    class="d-flex mx-auto"
    aspect-ratio="32/5"
    cover
  />
  <v-container max-width="1400">
    <div v-if="!loading && announcement">
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
              ></v-img>
            </v-avatar>
            <p class="v-card-subtitle">
              {{ announcement.flowinityUser?.username }}
            </p>
          </div>
          <div>
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
              class="ml-4"
              v-if="announcement.content"
              v-html="mdAnnouncements.render(announcement.content)"
            ></p>
          </div>
        </div>
      </div>
    </div>
    <v-skeleton-loader
      v-else-if="loading"
      :loading="true"
      class="mx-auto"
      height="100%"
      type="article"
    />
    <div v-else class="d-flex justify-center flex-column">
      <v-card-title class="text-h4 text-wrap text-center">
        Announcement does not exist.
      </v-card-title>
      <v-btn to="/news"> Back to News </v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import { useApolloClient } from "@vue/apollo-composable"
import { AnnouncementDocument, AnnouncementQuery } from "@/gql/graphql"
import dayjs from "../../lib/dayjs"
import mdAnnouncements from "@/lib/mdAnnouncements"

const route = useRoute()
const id = computed(() => <string>route.params.id)
const apollo = useApolloClient()
const announcement = ref<AnnouncementQuery["announcement"] | null>(null)
const loading = ref(false)

async function getAnnouncement() {
  loading.value = true
  const { data } = await apollo.client.query({
    query: AnnouncementDocument,
    variables: { announcementId: id.value }
  })
  announcement.value = data.announcement
  loading.value = false
}

onMounted(() => {
  getAnnouncement()
})

watch(
  () => id.value,
  () => {
    getAnnouncement()
  }
)
</script>

<style scoped></style>
