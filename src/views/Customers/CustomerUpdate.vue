<script setup>
import useCustomers from '../../../services/customers';
import { onMounted } from 'vue';

const { customer, getCustomer, updateCustomer, errors } = useCustomers();

const props = defineProps({
  id: {
    required: true,
    type: String
  }
});

onMounted(() => getCustomer(props.id));
</script>

<template>
  <!-- Update Customer Details Box -->
  <div class="bg-white shadow-lg p-6 rounded-lg mt-20 flex items-center justify-between">
    <div>
      <h1 class="text-xl">Update Customer Details</h1>
      <p class="text-slate-400">Fill in the details in the form below and then click 'Update'.</p>
    </div>
    <RouterLink :to="{name: 'CustomerIndex'}" class="border-b border-black hover:text-slate-600 hover:border-slate-600">Back to Customer List</RouterLink>
  </div>

  <!-- Form Box -->
  <form @submit.prevent="updateCustomer($route.params.id)" class="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg mt-16">
    <!-- Customer Name -->
    <div class="mb-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Customer Name</label>
      <input v-model="customer.name" type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <!-- Address -->
    <div class="mb-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
      <input v-model="customer.address" type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <!-- Premium -->
    <div class="mb-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Premium</label>
      <input v-model="customer.premium" type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <!-- Policy Type -->
    <div class="mb-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Policy Type</label>
      <input v-model="customer.policy" type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <!-- Insurer -->
    <div class="mb-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Insurer</label>
      <input v-model="customer.insurer" type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <!-- Submit Button -->
    <button type="submit" class="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-500 font-semibold w-full mt-6">Update</button>
  </form>
</template>
