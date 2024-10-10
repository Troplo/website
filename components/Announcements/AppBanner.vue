<template>
  <v-alert
    v-if="banner"
    :value="true"
    variant="tonal"
    :type="
      banner.bannerType === BannerType.None
        ? undefined
        : banner.bannerType || undefined
    "
    :icon="banner.bannerIcon || false"
    tile
    :id="`banner-${banner.id}`"
  >
    <span v-thtml="banner.bannerText"></span>
    <template #append>
      <template v-if="preview"> (PREVIEW) </template>
      <v-btn
        :to="`/news/${banner.id}`"
        size="small"
        variant="outlined"
        v-if="banner.id !== 'status'"
        >Learn more</v-btn
      >
      <v-btn
        v-else
        size="small"
        variant="outlined"
        href="https://status.troplo.com"
        target="_blank"
        >Learn More</v-btn
      >
    </template>
  </v-alert>
</template>

<script setup lang="ts">
import { type AnnouncementQuery, BannerType } from "~/gql/graphql"

defineProps<{
  banner: AnnouncementQuery["announcement"]
  preview?: boolean
}>()
</script>

<style scoped></style>
