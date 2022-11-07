<script setup>
import useCustomers from '../../../services/customers';
import { onMounted } from 'vue';

const { customers, getCustomers } = useCustomers();

onMounted(() => getCustomers());
</script>

<template>
  <!-- Manage Customers Box -->
  <div class="bg-white shadow-lg p-6 rounded-lg mt-20 flex items-center justify-between">
    <div>
      <h1 class="text-xl">Manage Your Customers</h1>
      <p class="text-slate-400">Browse and edit currently existing customers, or create a new customer</p>
    </div>
    <RouterLink :to="{name: 'CustomerCreate'}" class="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-500 font-semibold">Create Customer</RouterLink>
  </div>

  <!-- Customer Data Table -->
  <div class="bg-white shadow-lg p-6 rounded-lg mt-4">
    <div class="overflow-x-auto relative">

        <!-- Search Field -->
        <div class="pb-6 bg-white dark:bg-gray-900">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" class="block p-2 pl-10 w-80 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:-outline-offset-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Customers, Policies and Insurers">
            </div>
        </div>

        <!-- Table -->
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Customer Name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Address
                    </th>
                    <th scope="col" class="py-3 px-6 text-right pr-12">
                        Premium
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Policy Type
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Insurer
                    </th>
                    <th scope="col" class="py-3 px-6 text-right">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ customer.name }}
                    </th>
                    <td class="py-4 px-6">
                      {{ customer.address }}
                    </td>
                    <td class="py-4 px-6 text-right pr-12">
                        £{{ customer.premium }}
                    </td>
                    <td class="py-4 px-6">
                      {{ customer.policy }}
                    </td>
                    <td class="py-4 px-6">
                      {{ customer.insurer }}
                    </td>
                    <td class="py-4 px-6 text-right">
                        <RouterLink :to="{name: 'CustomerUpdate', params: {id: customer.id}}" class="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-500 font-semibold">Edit</RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
