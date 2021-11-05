<template>
  <div id="home">
    <v-container class="text-center">
      <v-card elevation="12">
        <v-container>
          <p class="troploGradient">Troplo</p>
          <p class="text-h4">Full-stack web developer.</p>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<style>
.troploGradient{
  font-size: 300px;
  font-style: italic;
  background:-webkit-radial-gradient(#0179f3, #0190ea);
  -webkit-background-clip:text
}

.normal {
  font-color: #ffffff
}
</style>

<script>
  export default {
    name: 'Home',
  }
</script>