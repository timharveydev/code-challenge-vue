/**
 * This file handles all API requests relating to Customers
 */

import { ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

// Base URL
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

export default function useCustomers() {
  const customers = ref([]);
  const customer = ref([]);
  const errors = ref({});
  const router = useRouter;

  // Get all Customers
  const getCustomers = async () => {
    const response = await axios.get('customers');
    customers.value = response.data.data;
  }

  // Get individual Customer
  const getCustomer = async (id) => {
    const response = await axios.get('customers/' + id);
    customer.value = response;
  }

  // Store new Customer
  const storeCustomer = async (data) => {
    try {
      await axios.post('customers', data);
      await router.push({ name: 'CustomerIndex' });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        console.log(error);
      }
    }
  }

  // Update existing customer
  const updateCustomer = async (id) => {
    try {
      await axios.put('customers/' + id, customer.value);
      await router.push({name: 'CustomerIndex'});
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  }

  return {
    customers,
    customer,
    getCustomers,
    getCustomer,
    storeCustomer,
    updateCustomer,
    errors
  }
}