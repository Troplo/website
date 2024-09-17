<template>Logging in using Flowinity...</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
onMounted(() => {
  if (route.query.code) {
    localStorage.setItem("token", <string>route.query.code)
    router.push("/")
  } else {
    window.location.href =
      "https://flowinity.com/oauth/0af70b78-f8f3-4d05-9c2a-f24af7e907c6"
  }
})
</script>

<style scoped></style>
