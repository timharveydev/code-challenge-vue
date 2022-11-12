<script setup>

import InfoBox from '../../components/InfoBox.vue';
import TextInput from '../../components/forms/TextInput.vue';
import MoneyInput from '../../components/forms/MoneyInput.vue';
import useCustomers from '../../../services/customers';
import { reactive } from 'vue';

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
  <!-- Create a New Customer Info Box -->
  <InfoBox
    heading="Create a New Customer"
    description="Fill in the details in the form below and then click 'Submit'."
  ></InfoBox>

  <!-- Form -->
  <form @submit.prevent="storeCustomer(form)" class="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg mt-16">
    <!-- Customer Name -->
    <TextInput label="Customer Name" v-model="form.name"></TextInput>
    <!-- Address -->
    <TextInput label="Address" v-model="form.address"></TextInput>
    <!-- Premium -->
    <MoneyInput label="test premium" v-model="form.premium"></MoneyInput>
    <!-- Policy Type -->
    <TextInput label="Policy Type" v-model="form.policy"></TextInput>
    <!-- Insurer -->
    <TextInput label="Insurer" v-model="form.insurer"></TextInput>
    <!-- Submit -->
    <button type="submit" class="button w-full mt-6">Submit</button>
  </form>
</template>
