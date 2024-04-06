<script setup>
import { computed, defineProps } from "vue";
const props = defineProps(["id", "text", "amount"]);
console.log(props.amount);
const textColor = computed(() => {
  if (props.amount < 0) {
    return "border-r-red-500";
  } else return "border-r-green-500";
});
</script>
<template>
  <div class="relative mb-1">
    <button
      @click="$emit('deleteTransaction', id)"
      class="absolute top-0 right-0 p-1.5 hover:bg-red-200 rounded-full"
    >
      <img
        width="16"
        height="16"
        src="https://img.icons8.com/emoji/48/cross-mark-emoji.png"
        alt="cross-mark-emoji"
      />
    </button>
  </div>
  <div
    class="border-solid border-slate-300 border-t-[0.25px] p-4 shadow-lg flex justify-between my-4 border-r-4"
    :class="textColor"
  >
    <h2>{{ text }}</h2>

    <p class="mb-1"><b>$</b>{{ amount }}</p>
  </div>
</template>
