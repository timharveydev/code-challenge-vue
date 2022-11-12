<script setup>

import InfoBox from '../../components/InfoBox.vue';
import TextInput from '../../components/forms/TextInput.vue';
import MoneyInput from '../../components/forms/MoneyInput.vue';
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
  <!-- Update Customer Details Info Box -->
  <InfoBox
    heading="Update Customer Details"
    description="Fill in the details in the form below and then click 'Update'."
  ></InfoBox>

  <!-- Form -->
  <form @submit.prevent="updateCustomer($route.params.id)" class="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg mt-16">
    <!-- Customer Name -->
    <TextInput label="Customer Name" v-model="customer.name"></TextInput>
    <!-- Address -->
    <TextInput label="Address" v-model="customer.address"></TextInput>
    <!-- Premium -->
    <MoneyInput label="test premium" v-model="customer.premium"></MoneyInput>
    <!-- Policy Type -->
    <TextInput label="Policy Type" v-model="customer.policy"></TextInput>
    <!-- Insurer -->
    <TextInput label="Insurer" v-model="customer.insurer"></TextInput>
    <!-- Submit Button -->
    <button type="submit" class="button w-full mt-6">Update</button>
  </form>
</template>
