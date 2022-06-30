<template>
  <v-app>
    <v-main>
      <Header></Header>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  name: "App",
  components: {
    Header
  },
  data: () => ({
    //
  }),
  watch: {
    $route(to) {
      this.$store.commit("setRoute", to.name)
      document.title = to.name + " - " + this.$store.state.site.name
    }
  }
}
</script>
