<script setup>

import TableHeadCell from '../../components/tables/TableHeadCell.vue';
import TableDataCell from '../../components/tables/TableDataCell.vue';
import SearchInput from '../../components/forms/SearchInput.vue';
import InfoBox from '../../components/InfoBox.vue';
import useCustomers from '../../../services/customers';
import { onMounted } from 'vue';

const { customers, getCustomers } = useCustomers();

onMounted(() => getCustomers());

</script>

<template>
  <!-- Manage Customers Info Box -->
  <InfoBox
    heading="Manage Your Customers"
    description="Browse and edit currently existing customers, or create a new customer"
    allowCreate
  ></InfoBox>

  <!-- Customer Data Table -->
  <div class="bg-white shadow-lg p-6 rounded-lg mt-4">
    <div class="overflow-x-auto relative">

        <!-- Search Field -->
        <SearchInput
            label="Search"
            placeholder="Search Customers, Policies and Insurers"
        ></SearchInput>

        <!-- Table -->
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <TableHeadCell>
                        Customer Name
                    </TableHeadCell>
                    <TableHeadCell>
                        Address
                    </TableHeadCell>
                    <TableHeadCell class="text-right pr-12">
                        Premium
                    </TableHeadCell>
                    <TableHeadCell>
                        Policy Type
                    </TableHeadCell>
                    <TableHeadCell>
                        Insurer
                    </TableHeadCell>
                    <TableHeadCell class="text-right">
                        Action
                    </TableHeadCell>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" class="bg-white border-b hover:bg-gray-50">
                    <TableHeadCell class="font-medium text-gray-900 whitespace-nowrap">
                        {{ customer.name }}
                    </TableHeadCell>
                    <TableDataCell>
                        {{ customer.address }}
                    </TableDataCell>
                    <TableDataCell class="text-right pr-12">
                        £{{ customer.premium }}
                    </TableDataCell>
                    <TableDataCell>
                        {{ customer.policy }}
                    </TableDataCell>
                    <TableDataCell>
                        {{ customer.insurer }}
                    </TableDataCell>

                    <TableDataCell class="text-right">
                        <RouterLink
                            :to="{name: 'CustomerUpdate', params: {id: customer.id}}"
                            class="button"
                        >
                            Edit
                        </RouterLink>
                    </TableDataCell>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
