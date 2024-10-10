<template>
  <svg viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M449.564 360.172L359.574 450.116L449.662 540.158L539.652 450.214L449.564 360.172Z"
      :fill="color || (theme.current.value.dark ? 'white' : 'black')"
    />
    <path
      d="M449.558 -6.01983e-06L359.475 90.0371L696.656 427.047C702.801 433.189 706.248 441.528 706.254 450.209C706.247 458.906 702.79 467.241 696.655 473.372L539.648 630.3L629.736 720.342L808.193 541.976C858.896 491.298 858.898 409.132 808.194 358.454L449.558 -6.01983e-06Z"
      :fill="color || (theme.current.value.dark ? 'white' : 'black')"
    />
    <path
      d="M450.442 900.001L540.525 809.964L203.344 472.955C197.199 466.812 193.752 458.473 193.746 449.792C193.753 441.096 197.21 432.761 203.345 426.63L360.352 269.702L270.264 179.659L91.8067 358.026C41.1039 408.703 41.1024 490.869 91.8065 541.548L450.442 900.001Z"
      :fill="color || (theme.current.value.dark ? 'white' : 'black')"
    />
  </svg>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify"

const theme = useTheme()

defineProps<{
  color?: string
}>()
</script>

<style scoped></style>
