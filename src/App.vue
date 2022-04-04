<template>
  <v-app>
    <v-main>
      <Header></Header>
      <router-view />
    </v-main>
  </v-app>
</template>
<style>
.troplo-nav {
  font-family: "Roboto", sans-serif;
}

.troplo-header {
  -webkit-font-smoothing: antialiased !important;
  background: -webkit-radial-gradient(#0179f3, #0190ea) !important;
}
.troplo-header-title {
  -webkit-font-smoothing: antialiased !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 450;
  elevation: 0 !important;
  font-size: 15rem;
  font-style: italic;
  text-shadow: none !important;
  color: -webkit-radial-gradient(#0179f3, #0190ea) !important;
  -webkit-background-clip: text;
}
.troplo-title {
  font-weight: 500;
  background: -webkit-radial-gradient(#0179f3, #0190ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.theme--dark.v-sheet {
  background-color: #151515 !important;
  border-color: #151515 !important;
  color: #ffffff;
}
.card {
  overflow: hidden;
}
.theme--dark.v-card {
  background-color: #151515 !important;
}
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: black #151515;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #0e0e0e;
}

*::-webkit-scrollbar-thumb {
  background-color: #151515;
  border-radius: 20px;
  border: 3px solid #151515;
}
</style>
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
