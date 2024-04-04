<script setup>
import { computed } from "vue";
const props = defineProps(["balanceType", "balance"]);
const textColor = computed(() => {
  if (props.balanceType === "EXPENSE") {
    return "text-[#dc2626]";
  } else return "text-[#22c55e]";
});
</script>
<template>
  <div class="my-8 p-8 w-[80%] rounded-xl shadow-lg flex justify-between">
    <p>{{ balanceType }}</p>
    <p class="font-semibold" :class="textColor">
      <span class="font-bold">$</span>
      {{ balance }}
    </p>
  </div>
</template>
