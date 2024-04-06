<script setup>
import TransactionItem from "../components/TransactionItem.vue";
import { useTransactionStore } from "../stores/TransactionStore";
let transaction = useTransactionStore();
// const props = defineProps(["expenses"]);
// console.log(props.expenses);

const deleteTransaction = (id) => {
  transaction.expensesList = transaction.expensesList.filter(
    (expense) => expense.id !== id
  );
  // console.log(id);
};
</script>
<template>
  <div class="w-[40%] mx-auto p-4">
    <h2 class="font-semibold">History</h2>
    <hr />
    <ul>
      <li v-for="expense in transaction.expensesList" :key="expense.id">
        <TransactionItem
          :id="expense.id"
          :text="expense.text"
          :amount="expense.amount"
          @deleteTransaction="deleteTransaction"
        ></TransactionItem>
      </li>
      <li class="flex justify-center">
        <p v-if="transaction.expensesList.length <= 0">
          No Transaction History Recorded
        </p>
      </li>
    </ul>
  </div>
</template>
