<template>
  <v-card-title class="text-wrap" v-if="item"> Latest blog post </v-card-title>
  <DynamicCard
    v-if="item"
    :title="item.title"
    :secondary-text="item.description"
    :image="item.image"
    :to="`/news/${item.id}`"
    v-bind="$attrs"
  >
    <template #subtitle>
      <div class="align-center d-inline-flex">
        Read more
        <v-icon class="ml-2">mdi-arrow-right</v-icon>
      </div>
    </template>
    <template #right-text v-if="!display.mobile.value">
      <div class="d-inline-flex align-center">
        <v-icon class="mr-1">mdi-information</v-icon>
        {{ dayjs(item.createdAt).format("Do of MMMM YYYY") }}
      </div>
    </template>
  </DynamicCard>
</template>

<script lang="ts" setup>
import DynamicCard from "@/components/DynamicCard.vue"
import { useAnnouncementsStore } from "@/stores/announcements.store"
import dayjs from "../../lib/dayjs"
import { useDisplay } from "vuetify"
import type { AnnouncementQuery } from "~/gql/graphql"

const announcementsStore = useAnnouncementsStore()
const display = useDisplay()

const item = ref<AnnouncementQuery["announcement"] | null>(null)

const { data: announcement } = await useAsyncData(
  "announcement-home",
  async () => announcementsStore.getAnnouncement(null, true)
)

watchEffect(() => {
  item.value = announcement.value
})
</script>

<style scoped></style>
