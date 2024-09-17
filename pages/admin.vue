<template>
  <v-navigation-drawer
    floating
    color="dark"
    expand
    v-if="!display.mobile.value"
  >
    <v-list nav dense>
      <v-list-item v-for="item in items" :key="item.path" link :to="item.path">
        <template #prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <teleport to="#sidebar-options" v-if="display.mobile.value && userStore.user">
    <v-divider />
    Admin
    <v-list-item v-for="item in items" :key="item.path" link :to="item.path">
      <template #prepend>
        <v-icon>{{ item.icon }}</v-icon>
      </template>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </teleport>
  <NuxtPage />
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/user.store"
import { useDisplay } from "vuetify"

const userStore = useUserStore()
const display = useDisplay()

const items = [
  {
    title: "Announcements",
    icon: "mdi-newspaper",
    path: "/admin/announcements"
  },
  {
    title: "Services for COL/BC",
    icon: "mdi-newspaper",
    path: "/admin/services"
  }
]
</script>

<style scoped></style>
