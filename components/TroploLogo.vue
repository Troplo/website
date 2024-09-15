<template>
  <svg viewBox="0 0 413 559" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 45.8182L7.63637 0H412.636L405 45.8182H228L142.909 558.545H91.9091L177 45.8182H0Z"
      fill="url(#paint0_linear_301_3)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_301_3"
        x1="152.455"
        y1="-0.454531"
        x2="152.455"
        y2="558.545"
        gradientUnits="userSpaceOnUse"
      >
        <stop :stop-color="props.gradientStart || '#0094FF'" offset="0" />
        <stop offset="1" :stop-color="props.gradientEnd || '#0085FF'" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  gradientStart?: string
  gradientEnd?: string
}>()
</script>

<style scoped></style>
