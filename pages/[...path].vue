<template>
  <div>
    <v-container>
      <v-card elevation="8" class="rounded-xl">
        <v-container class="text-center">
          <p class="text-h4">Not Found.</p>
          <p class="subtitle">This route does not exist.</p>
          <v-btn variant="tonal" class="mt-2" @click="$router.push('/')"
            >Go Home</v-btn
          >
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Not Found - Troplo.com",
  meta: [
    {
      name: "description",
      content: "The home of projects and services from Troplo."
    },
    {
      property: "og:title",
      content: "Not Found - Troplo.com"
    },
    {
      property: "og:description",
      content: "The home of projects and services from Troplo."
    }
  ]
})

setResponseStatus(404)
</script>

<style scoped></style>
