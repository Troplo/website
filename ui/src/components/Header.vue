<template>
  <div id="header">
    <v-app-bar color="dark" floating app dense>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mobile && $store.state.user.username" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{$store.state.site.route}}<v-app-bar-nav-icon disabled v-if="$store.state.site.release !== 'prod'">{{$store.state.site.release}}</v-app-bar-nav-icon></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
        floating
        color="dark"
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
        {id: 2, title: "Projects", icon: "mdi-text-box-multiple", path: "/projects"},
        {id: 3, title: "Contact", icon: "mdi-mail", path: "/contact"}
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