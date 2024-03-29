<script setup>
import { computed } from "vue";
const props = defineProps(["balanceType", "balance"]);
const textColor = computed(() => {
  if (props.balanceType === "EXPENSE") {
    return "text-[#dc2626]";
  } else return "text-[#22c55e]";
});
const textSign = computed(() => {
  if (props.balanceType === "EXPENSE") {
    return true;
  } else {
    return false;
  }
});
</script>
<template>
  <div class="m-10 p-8 rounded-xl shadow-lg flex justify-between">
    <p>{{ balanceType }}</p>
    <p class="font-semibold" :class="textColor">
      <span class="font-bold">$</span><span v-show="textSign">-</span
      >{{ balance }}
    </p>
  </div>
</template>
<style scoped></style>
