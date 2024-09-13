<template>
  <div id="header">
    <v-toolbar color="surface">
      <v-app-bar-nav-icon
        @click.stop="sidebar = !sidebar"
        v-if="display.mobile.value"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        class="troplo-title"
        @click="$router.push('/')"
        style="cursor: pointer"
        >Troplo's Website</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <div class="d-flex mr-4" style="gap: 4px" v-if="!display.mobile.value">
        <v-btn
          text
          v-for="item in items"
          :key="item.id"
          :to="item.path"
          style="text-transform: unset !important"
          :disabled="item.disabled"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-btn>
        <v-btn
          v-if="false"
          class="ml-1"
          text
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-list-item-title>
            <v-icon>{{
              $vuetify.theme.dark ? "mdi-lightbulb-on" : "mdi-lightbulb-outline"
            }}</v-icon>
          </v-list-item-title>
        </v-btn>
      </div>
    </v-toolbar>
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
        <v-list-item v-for="item in items" :key="item.id" link :to="item.path">
          <v-icon>{{ item.icon }}</v-icon>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-icon>{{
            theme.current.value.dark
              ? "mdi-lightbulb-on"
              : "mdi-lightbulb-outline"
          }}</v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { useDisplay, useTheme } from "vuetify"
import { ref } from "vue"

const display = useDisplay()
const theme = useTheme()

const sidebar = ref(false)
const items = ref([
  { id: 1, title: "Home", icon: "mdi-home", path: "/" },
  { id: 3, title: "Contact", icon: "mdi-email", path: "/contact" }
])
</script>

<style scoped></style>
