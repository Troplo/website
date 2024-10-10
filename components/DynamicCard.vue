<template>
  <v-card
    :height="<string>height"
    :to="to"
    class="rounded-xl d-flex flex-column"
    elevation="8"
    style="cursor: pointer"
  >
    <v-img
      :gradient="
        rightText && !normalGradient
          ? 'to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%'
          : title
            ? 'to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)'
            : undefined
      "
      :src="image"
      class="white--text align-end"
      :cover="true"
      transition="none"
    >
      <template #placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular color="grey lighten-5" indeterminate />
        </v-row>
      </template>
      <slot />
      <v-card-title v-if="title || $slots['title']">
        {{ title }}
        <slot name="title" />
        <p
          v-if="
            !secondaryText &&
            !$slots['secondary-text'] &&
            subtitle &&
            $slots['subtitle']
          "
          class="float-end"
        >
          {{ subtitle }}
          <slot name="subtitle" />
        </p>
      </v-card-title>
      <v-card-text
        v-if="secondaryText || $slots['secondary-text']"
        class="mt-n2"
      >
        {{ secondaryText }}
        <slot name="secondary-text" />
        <p v-if="subtitle || $slots['subtitle']" class="float-end">
          {{ subtitle }}
          <slot name="subtitle" />
        </p>
      </v-card-text>
      <v-card-text
        v-if="rightText || $slots['right-text']"
        :style="blackText ? 'color: black !important;' : 'color: white'"
        style="position: absolute; top: 0; right: 0; font-size: 18px"
      >
        {{ rightText }}
        <slot name="right-text" />
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  to?: string
  image?: string
  title?: string
  subtitle?: string
  secondaryText?: string
  rightText?: string
  blackText?: boolean
  height?: string
  normalGradient?: boolean
}>()
</script>
