<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Header -->
  <header class=" bg-white w-full h-16 font-nunito shadow-lg">
    <div class="max-w-7xl mx-auto h-full flex items-center">
      <p class="text-2xl">Achme Broker Ltd</p>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-7xl mx-auto min-h-screen font-nunito pb-20">
    <RouterView />
  </main>
</template>
