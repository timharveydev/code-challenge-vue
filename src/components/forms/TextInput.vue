<script>
export default {
  props: ['modelValue', 'label'],
  emits: ['update:modelValue'],
  computed: {
    name() {
      return this.label.toLowerCase().replace(/\s/g, '')
    }
  }
}
</script>

<template>
  <div class="mb-6">
    <label :for="name" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      :id="name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5"
    >
  </div>
</template>