<script setup>

</script>

<template>
  <!-- Update Customer Details Box -->
  <div class="bg-white shadow-lg p-6 rounded-lg mt-20 flex items-center justify-between">
    <div>
      <h1 class="text-xl">Update Customer Details</h1>
      <p class="text-slate-400">Fill in the details in the form below and then click 'Submit'.</p>
    </div>
    <RouterLink :to="{name: 'CustomerIndex'}" class="border-b border-black hover:text-slate-600 hover:border-slate-600">Back to Customer List</RouterLink>
  </div>

  <!-- Form Box -->
  <form class="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg mt-16">
    <div class="mb-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Customer Name</label>
      <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div class="mb-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
      <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div class="mb-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Premium</label>
      <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div class="mb-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Policy Type</label>
      <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div class="mb-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Insurer</label>
      <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <button class="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-500 font-semibold w-full mt-6">Submit</button>
  </form>
</template>
