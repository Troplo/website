<template>
  <v-footer
    app
    class="w-100 d-flex justify-space-between align-center"
    absolute
  >
    <small
      >&copy; 2026 Troplo & Flowinity.<br />
      Flowinity
      <a href="https://flowinity.com/policies/privacy" target="_blank"
        >Privacy Policy</a
      >
      and how we use your data.
    </small>
    <TroploLogo
      v-if="display.width.value && !display.mobile.value"
      aria-label="Troplo icon"
      title="Troplo icon"
      style="width: 30px"
      gradient-start="#303030"
      gradient-end="#303030"
    />
  </v-footer>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify"

const display = useDisplay()
</script>

<style scoped></style>
