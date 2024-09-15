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
          <v-alert
            v-for="banner in announcementsStore.banners"
            :key="banner.id"
            :value="true"
            variant="tonal"
            :type="banner.bannerType || undefined"
            :icon="
              banner.bannerType === BannerType.Error
                ? 'mdi-alert-circle'
                : undefined
            "
            tile
            :id="`banner-${banner.id}`"
          >
            <strong v-if="banner.id !== 'status'">UPCOMING:</strong>
            {{ banner.bannerText }}
            <template #append>
              <v-btn
                :to="`/news/${banner.id}`"
                size="small"
                variant="outlined"
                v-if="banner.id !== 'status'"
                >Learn more</v-btn
              >
              <v-btn
                v-else
                size="small"
                variant="outlined"
                href="https://status.troplo.com"
                target="_blank"
                >Learn More</v-btn
              >
            </template>
          </v-alert>
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
