<script setup>
import { onMounted } from "vue";
import BaseCard from "../components/UI/BaseCard.vue";
import TransactionList from "../components/TranscationList.vue";
import { useTransactionStore } from "../stores/TransactionStore";
let transaction = useTransactionStore();

onMounted(() => {
  console.log(transaction.totalBalance);
});
</script>
<template>
  <div class="max-w-screen-md mx-auto flex justify-center items-center gap-4">
    <BaseCard balance-type="BALANCE" :balance="transaction.totalBalance">
    </BaseCard>
    <BaseCard balance-type="INCOME" balance="20000"> </BaseCard>
    <BaseCard balance-type="EXPENSE" balance="5000"> </BaseCard>
  </div>
  <TransactionList :expenses="transaction.expensesList"></TransactionList>
</template>
