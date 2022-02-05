<template>
  <div id="home">
    <v-container class="text-center">
      <v-card elevation="8" class="troplo-header rounded-xl">
        <v-container>
          <div v-if="!$vuetify.breakpoint.mobile" class="troplo-header-title">
            Troplo
          </div>
          <div
            v-if="$vuetify.breakpoint.mobile"
            class="troplo-header-title"
            style="background: -webkit-radial-gradient(#0179f3, #0190ea)"
          >
            T
          </div>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>
