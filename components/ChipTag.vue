<template>
  <v-chip
    :href="tag.link"
    :color="tag.color"
    :disabled="!tag.link"
    style="opacity: 1"
  >
    <v-img
      v-if="tag.icon === 'crystal'"
      src="/images/crystal-icon.svg"
      width="26"
      class="mx-n1"
    ></v-img>
    <v-icon v-if="tag.icon !== 'crystal'">{{ tag.icon }}</v-icon>
    <template v-if="tag.icon">&nbsp;</template>
    {{ tag.name }}
  </v-chip>
</template>

<script setup lang="ts">
defineProps<{
  tag: {
    name: string
    link?: string
    color?: string
    icon?: string
  }
}>()
</script>

<style scoped></style>
