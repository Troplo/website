<template>
  <NuxtLayout>
    <v-app>
      <Header />
      <v-main
        :style="{
          '--v-layout-top': '64px'
        }"
      >
        <div class="d-flex flex-column w-100">
          <AppBanner
            v-for="banner in announcementsStore.banners"
            :key="banner.id"
            :banner="banner"
          />
        </div>
        <NuxtPage />
        <Footer />
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import "./styles/index.css"
import { useAnnouncementsStore } from "~/stores/announcements.store"
import { BannerType } from "~/gql/graphql"
import Footer from "~/components/Footer.vue"
import AppBanner from "~/components/Announcements/AppBanner.vue"

const announcementsStore = useAnnouncementsStore()

const { data: banners } = await useAsyncData(`banners`, async () =>
  announcementsStore.getAnnouncements({ banner: true })
)

watchEffect(() => {
  if (banners.value) {
    announcementsStore.banners = banners.value.items
  }
})
</script>
