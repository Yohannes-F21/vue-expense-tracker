<script setup>
const props = defineProps(["transactionName", "transactionCost"]);
</script>
<template>
  <div
    class="p-4 shadow-lg flex justify-between my-4 border-r-4 border-r-red-500"
  >
    <h2>{{ transactionName }}</h2>
    <p><b>$</b>{{ transactionCost }}</p>
  </div>
</template>
