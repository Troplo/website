<template>
  <v-container max-width="1400">
    <div v-if="!loading" class="d-flex flex-column" style="gap: 12px">
      <v-card
        v-for="announcement in news"
        :key="announcement.id"
        class="rounded-xl"
      >
        <div :class="{ 'd-flex': !display.mobile.value }">
          <v-img
            :src="announcement.image"
            aspect-ratio="16/9"
            max-width="400"
            min-width="400"
            cover
          />
          <div class="d-flex flex-column justify-center flex-0">
            <v-card-title class="text-h4 text-wrap">{{
              announcement.title
            }}</v-card-title>
            <v-card-subtitle>
              {{ dayjs(announcement.createdAt).format("Do of MMMM YYYY") }}
            </v-card-subtitle>
            <v-card-text>
              {{ announcement.description }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                :to="`/news/${announcement.id}`"
                variant="outlined"
                class="ml-2"
                >Read more</v-btn
              >
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { AnnouncementsQuery } from "@/gql/graphql"
import { onMounted, ref } from "vue"
import { useAnnouncementsStore } from "@/stores/announcements.store"
import dayjs from "../../lib/dayjs"
import { useDisplay } from "vuetify"

const news = ref<AnnouncementsQuery["announcements"]>([])
const announcementsStore = useAnnouncementsStore()
const loading = ref(false)
const page = ref(1)
const display = useDisplay()

async function getNews() {
  loading.value = true
  const data = await announcementsStore.getAnnouncements({
    page: page.value
  })
  news.value = data
  loading.value = false
}

onMounted(() => {
  getNews()
})
</script>

<style scoped></style>
