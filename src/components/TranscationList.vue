<script setup>
import TransactionItem from "../components/TransactionItem.vue";
</script>
<template>
  <div class="border-solid border-black w-[40%] mx-auto p-4">
    <h2 class="font-semibold">History</h2>
    <hr />
    <TransactionItem
      transaction-name="Sneakers"
      transaction-cost="2000"
    ></TransactionItem>
    <TransactionItem
      transaction-name="Sneakers"
      transaction-cost="2000"
    ></TransactionItem>
    <TransactionItem
      transaction-name="Sneakers"
      transaction-cost="2000"
    ></TransactionItem>
  </div>
</template>
