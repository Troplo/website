<template>
  <v-app>
    <v-main v-if="outages.length">
      <v-alert class="mb-0 p-0" text color="red" :value="true" tile icon="mdi-alert-circle">
        You might be currently experiencing problems with:
        {{outageName}}.
      </v-alert>
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
    outages: []
  }),
  watch: {
    $route(to) {
      this.$store.commit("setRoute", to.name)
      document.title = to.name + " - " + this.$store.state.site.name
    }
  },
  computed: {
    outageName() {
      return this.outages.map((o) => o.attributes.pronounceable_name).join(", ")
    }
  },
  mounted() {
    fetch("https://troplo-status.flowinity.workers.dev")
      .then((res) => res.json())
      .then((data) => {
        this.outages = data.data.filter((d) => d.attributes.status !== "up")
      })
  }
}
</script>
