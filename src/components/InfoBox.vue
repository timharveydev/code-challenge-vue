<script setup>
  defineProps({
    heading: {
      type: String,
      required: true
    },
    description: String,
    allowCreate: {
      type: Boolean,
      default: false
    }
  });
</script>

<template>
  <div class="bg-white shadow-lg p-6 rounded-lg mt-20 flex items-center justify-between">
    <div>
      <h1 class="text-xl">{{ heading }}</h1>
      <p class="text-slate-400">{{ description }}</p>
    </div>

    <!-- Create Customer button -->
    <RouterLink
      v-if="allowCreate"
      :to="{name: 'CustomerCreate'}"
      class="button"
    >
      Create Customer
    </RouterLink>

    <!-- Back to Index button -->
    <RouterLink
      v-if="!allowCreate"
      :to="{name: 'CustomerIndex'}"
      class="border-b border-black hover:text-slate-600 hover:border-slate-600"
    >
      Back to Customer List
    </RouterLink>
  </div>
</template>