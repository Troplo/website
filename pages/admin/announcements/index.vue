<template>
  <v-toolbar>
    <v-toolbar-title>Announcements</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="() => $router.push('/admin/announcements/new')"
      ><v-icon class="mr-2">mdi-plus</v-icon>New Announcement</v-btn
    >
  </v-toolbar>
  <v-list>
    <v-list-item
      v-for="announcement in announcements"
      :key="announcement.id"
      link
      :to="`/admin/announcements/${announcement.id}`"
    >
      <v-list-item-title
        >{{ announcement.title }}
        <small v-if="announcement.draft">(draft)</small></v-list-item-title
      >
      <v-list-item-subtitle>{{
        announcement.description
      }}</v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { useAnnouncementsStore } from "~/stores/announcements.store"
import type { AnnouncementsQuery } from "~/gql/graphql"

const announcementsStore = useAnnouncementsStore()
const announcements = ref<AnnouncementsQuery["announcements"]["items"]>([])
const page = ref(1)

async function getAnnouncements() {
  const { items } = await announcementsStore.getAnnouncements({
    page: page.value
  })

  if (items) {
    announcements.value = items
  }
}

onMounted(() => {
  getAnnouncements()
})
</script>

<style scoped></style>
