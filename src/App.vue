<template>
  <v-app>
    <v-main>
      <v-alert
        v-if="outages.length"
        class="mb-0 p-0"
        text
        color="red"
        :value="true"
        tile
        icon="mdi-alert-circle"
      >
        <div class="d-flex justify-space-between align-center justify-center">
          <span>
            You might be currently experiencing problems with:
            {{ outageName }}.
          </span>
          <v-btn href="https://status.troplo.com" small color="red" text
            >Learn more</v-btn
          >
        </div>
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
