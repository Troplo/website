<template>
  <v-container max-width="1400">
    <v-skeleton-loader
      v-if="!news"
      :loading="true"
      class="rounded-xl mb-4"
      aspect-ratio="16/9"
      v-for="i in 5"
      :key="i"
      type="article"
    />
    <div v-else class="d-flex flex-column" style="gap: 12px">
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
      <div
        v-if="!news.length"
        class="text-h4 text-center d-flex flex-column justify-center align-center"
      >
        <v-icon size="48">mdi-information</v-icon>
        <span> There are no posts right now. </span>
        <v-card-subtitle>
          Check back later for the latest updates and announcements.
        </v-card-subtitle>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useAnnouncementsStore } from "@/stores/announcements.store"
import dayjs from "../../lib/dayjs"
import { useDisplay } from "vuetify"

const announcementsStore = useAnnouncementsStore()
const page = ref(1)
const display = useDisplay()

const { data: news } = await useAsyncData(
  "news",
  () => announcementsStore.getAnnouncements({ page: page.value }),
  {
    watch: [page]
  }
)
</script>

<style scoped></style>
