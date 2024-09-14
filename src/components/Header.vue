<template>
  <div id="header">
    <v-app-bar
      color="surface"
      :extension-height="announcementsStore.navbarOffset - 64"
    >
      <template #extension>
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
      </template>
      <v-app-bar-nav-icon
        @click.stop="sidebar = !sidebar"
        v-if="display.mobile.value"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        class="troplo-title"
        @click="router.push('/')"
        style="cursor: pointer"
        >Troplo's Website</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <div class="d-flex mr-4" style="gap: 4px" v-if="!display.mobile.value">
        <v-btn
          variant="text"
          v-for="item in items"
          :key="item.path"
          :to="item.path"
          style="text-transform: unset !important"
          :disabled="item.disabled"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      floating
      color="dark"
      app
      v-model="sidebar"
      v-if="display.mobile.value"
      expand
    >
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item
          v-for="item in items"
          :key="item.path"
          link
          :to="item.path"
        >
          <template #prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify"
import { onMounted, ref } from "vue"
import { useAnnouncementsStore } from "@/stores/announcements.store"
import { useRouter } from "vue-router"
import { BannerType } from "@/gql/graphql"

const display = useDisplay()
const announcementsStore = useAnnouncementsStore()

const sidebar = ref(false)
const items = ref<
  {
    title: string
    icon: string
    path: string
    disabled?: boolean
  }[]
>([
  { title: "Home", icon: "mdi-home", path: "/" },
  { title: "Contact", icon: "mdi-email", path: "/contact" },
  {
    title: "Blog & Updates",
    icon: "mdi-newspaper",
    path: "/news"
  }
])

const router = useRouter()

onMounted(async () => {
  announcementsStore.banners = await announcementsStore.getAnnouncements({
    banner: true
  })
})
</script>

<style scoped></style>
