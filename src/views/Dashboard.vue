<script setup>
import BaseCard from "../components/UI/BaseCard.vue";
import TransactionList from "../components/TranscationList.vue";
import { useTransactionStore } from "../stores/TransactionStore";
let transaction = useTransactionStore();

console.log(transaction.totalBalance);
</script>
<template>
  <div class="grid grid-cols-3 gap-10">
    <BaseCard balance-type="BALANCE" :balance="transaction.totalBalance">
    </BaseCard>
    <BaseCard balance-type="INCOME" balance="20000"> </BaseCard>
    <BaseCard balance-type="EXPENSE" balance="5000"> </BaseCard>
  </div>
  <TransactionList :expenses="transaction.expensesList"></TransactionList>
</template>
