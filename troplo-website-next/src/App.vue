<template>
  <v-app>
    <v-main>
      <v-alert
        v-if="outages.length"
        class="mb-0 p-0"
        variant="tonal"
        color="red"
        :value="true"
        tile
      >
        <div class="d-flex justify-space-between align-center justify-center">
          <span class="d-flex">
            <v-icon>mdi-alert-circle</v-icon>
            <span class="ml-2">
              You might be currently experiencing problems with:
              {{ outageName }}.
            </span></span
          >
          <v-btn
            href="https://status.troplo.com"
            size="small"
            color="red"
            variant="outlined"
            >Learn more</v-btn
          >
        </div>
      </v-alert>
      <v-alert
        v-for="banner in announcementsStore.banners"
        :key="banner.id"
        :value="true"
        variant="tonal"
        :type="banner.bannerType"
        :icon="banner.bannerType === 'error' ? 'mdi-alert-circle' : undefined"
        tile
      >
        <strong>UPCOMING:</strong>
        {{ banner.bannerText }}
        <template #append>
          <v-btn
            :to="`/announcements/${banner.id}`"
            size="small"
            variant="outlined"
            >Learn more</v-btn
          >
        </template>
      </v-alert>
      <Header />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
import Header from "@/components/Header.vue"
import { computed, onMounted, ref } from "vue"
import { useAnnouncementsStore } from "@/stores/announcements.store"

const outages = ref<any[]>([])
const announcementsStore = useAnnouncementsStore()

onMounted(() => {
  fetch("https://troplo-status.flowinity.workers.dev")
    .then((res) => res.json())
    .then((data) => {
      outages.value = data.data.filter((d) => d.attributes.status !== "up")
    })
  announcementsStore.getBanners()
})

const outageName = computed(() => {
  return outages.value.map((o) => o.attributes.pronounceable_name).join(", ")
})
</script>
