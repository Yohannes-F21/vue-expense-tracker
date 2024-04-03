<script setup>
const props = defineProps(["text", "amount"]);
</script>
<template>
  <div
    class="border-solid border-slate-300 border-t-[0.25px] p-4 shadow-lg flex justify-between my-4 border-r-4 border-r-red-500"
  >
    <h2>{{ text }}</h2>
    <p><b>$</b>{{ amount }}</p>
  </div>
</template>
