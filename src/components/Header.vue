<template>
  <div id="header">
    <v-toolbar dark>
      <v-app-bar-nav-icon
        @click.stop="sidebar = !sidebar"
        v-if="$vuetify.breakpoint.mobile"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        class="troplo-title"
        @click="$router.push('/')"
        style="cursor: pointer"
        >Troplo's Website</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-list v-if="!$vuetify.breakpoint.mobile">
        <v-btn
          text
          v-for="item in items"
          :key="item.id"
          class="ml-1"
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
      </v-list>
    </v-toolbar>
    <v-navigation-drawer
      floating
      color="dark"
      app
      v-model="sidebar"
      v-if="$vuetify.breakpoint.mobile"
      expand
    >
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item v-for="item in items" :key="item.id" link :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          v-if="false"
        >
          <v-list-item-icon>
            <v-icon>{{
              $vuetify.theme.dark ? "mdi-lightbulb-on" : "mdi-lightbulb-outline"
            }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      sidebar: false,
      items: [
        { id: 1, title: "Home", icon: "mdi-home", path: "/" },
        { id: 3, title: "Contact", icon: "mdi-email", path: "/contact" }
      ]
    }
  },
  mounted() {
    this.$vuetify.theme = { dark: true }
  }
}
</script>

<style scoped></style>
