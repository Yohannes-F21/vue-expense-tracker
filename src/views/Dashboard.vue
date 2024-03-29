<script setup>
import BaseCard from "../components/UI/BaseCard.vue";
</script>
<template>
  <div class="grid grid-cols-3 gap-4">
    <BaseCard balance-type="Current Balance" balance="10000"> </BaseCard>
    <BaseCard balance-type="INCOME" balance="20000"> </BaseCard>
    <BaseCard balance-type="EXPENSE" balance="5000"> </BaseCard>
  </div>
</template>
