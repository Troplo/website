<template>
  <div id="header">
    <v-navigation-drawer
        floating
        color="#1c1c1c"
        app
        expand>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list>
          <v-list>
            <v-list-item
                v-for="item in items"
                :key="item.id"
                link
                :to="item.path"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-list>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      items: [
        {id: 1, title: "Home", icon: "mdi-home", path: "/"},
        {id: 1, title: "Watch_Dogs Tools", icon: "mdi-nexus", path: "/"}
      ]
    }
  },
  mounted() {
    this.$vuetify.theme = { dark: true }
  }
}
</script>

<style scoped>

</style>