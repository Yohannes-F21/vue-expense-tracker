<script setup>
import BaseCard from "../components/UI/BaseCard.vue";
import TransactionList from "../components/TranscationList.vue";
</script>
<template>
  <div class="grid grid-cols-3 gap-10">
    <BaseCard balance-type="Current Balance" balance="10000"> </BaseCard>
    <BaseCard balance-type="INCOME" balance="20000"> </BaseCard>
    <BaseCard balance-type="EXPENSE" balance="5000"> </BaseCard>
  </div>
  <TransactionList></TransactionList>
</template>
