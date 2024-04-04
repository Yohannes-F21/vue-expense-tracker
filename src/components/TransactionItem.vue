<script setup>
import { computed } from "vue";
const props = defineProps(["text", "amount"]);
console.log(props.amount);
const textColor = computed(() => {
  if (props.amount < 0) {
    return "border-r-red-500";
  } else return "border-r-green-500";
});
</script>
<template>
  <div
    class="border-solid border-slate-300 border-t-[0.25px] p-4 shadow-lg flex justify-between my-4 border-r-4"
    :class="textColor"
  >
    <h2>{{ text }}</h2>
    <p><b>$</b>{{ amount }}</p>
  </div>
</template>
