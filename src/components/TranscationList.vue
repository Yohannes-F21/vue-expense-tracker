<script setup>
import TransactionItem from "../components/TransactionItem.vue";
const props = defineProps(["expenses"]);
// console.log(props.expenses);
</script>
<template>
  <div class="w-[40%] mx-auto p-4">
    <h2 class="font-semibold">History</h2>
    <hr />
    <ul>
      <li v-for="expense in expenses" :key="expense.id">
        <TransactionItem
          :text="expense.text"
          :amount="expense.amount"
        ></TransactionItem>
      </li>
    </ul>
  </div>
</template>
