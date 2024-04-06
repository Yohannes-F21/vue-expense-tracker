<script setup>
import { onMounted } from "vue";
import BaseCard from "../components/UI/BaseCard.vue";
import TransactionList from "../components/TranscationList.vue";
import { useTransactionStore } from "../stores/TransactionStore";
let transaction = useTransactionStore();

onMounted(() => {
  console.log(transaction.expensesList);
});
</script>
<template>
  <div class="max-w-screen-md mx-auto flex justify-center items-center gap-8">
    <BaseCard balance-type="BALANCE" :balance="+transaction.totalBalance">
    </BaseCard>
    <BaseCard balance-type="INCOME" :balance="+transaction.income"> </BaseCard>
    <BaseCard balance-type="EXPENSE" :balance="+transaction.expense">
    </BaseCard>
  </div>
  <TransactionList></TransactionList>
</template>
