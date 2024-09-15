<template>
  <v-app-bar color="surface">
    <!-- If it's on the server, the width will be zero -->
    <v-app-bar-nav-icon
      @click.stop="sidebar = !sidebar"
      v-if="display.mobile.value && display.width.value"
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
      <v-list-item v-for="item in items" :key="item.path" link :to="item.path">
        <template #prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify"
import { ref } from "vue"
import { useRouter } from "vue-router"

const display = useDisplay()

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
</script>

<style scoped></style>
