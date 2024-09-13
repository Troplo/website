<template>
  <div>
    <v-container>
      <v-card elevation="8" class="rounded-xl">
        <v-container class="text-center">
          <p class="text-h4">Not Found.</p>
          <p class="subtitle">This route does not exist.</p>
          <v-btn text @click="$router.push('/')">Go Home</v-btn>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped></style>
