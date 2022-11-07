<script setup>
import { reactive } from 'vue';
import useCustomers from '../../../services/customers';

const { storeCustomer, errors } = useCustomers();

const form = reactive({
  name: '',
  address: '',
  premium: '',
  policy: '',
  insurer: ''
});
</script>

<template>
  <!-- Create a New Customer Box -->
  <div class="bg-white shadow-lg p-6 rounded-lg mt-20 flex items-center justify-between">
    <div>
      <h1 class="text-xl">Create a New Customer</h1>
      <p class="text-slate-400">Fill in the details in the form below and then click 'Submit'.</p>
    </div>
    <RouterLink :to="{name: 'CustomerIndex'}" class="border-b border-black hover:text-slate-600 hover:border-slate-600">Back to Customer List</RouterLink>
  </div>

  <!-- Form Box -->
  <form @submit.prevent="storeCustomer(form)" class="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg mt-16">
    <!-- Customer Name -->
    <div class="mb-6">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Customer Name</label>
      <input v-model="form.name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <!-- Address -->
    <div class="mb-6">
      <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
      <input v-model="form.address" type="text" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <!-- Premium -->
    <div class="mb-6">
      <label for="premium" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Premium</label>
      <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none font-semibold text-slate-500">
            £
          </div>
          <input v-model="form.premium" type="text" id="premium" maxlength="8" class="pl-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </div>
    </div>
    <!-- Policy Type -->
    <div class="mb-6">
      <label for="policy" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Policy Type</label>
      <input v-model="form.policy" type="text" id="policy" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <!-- Insurer -->
    <div class="mb-6">
      <label for="insurer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Insurer</label>
      <input v-model="form.insurer" type="text" id="insurer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <!-- Submit -->
    <button type="submit" class="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-500 font-semibold w-full mt-6">Submit</button>
  </form>
</template>
