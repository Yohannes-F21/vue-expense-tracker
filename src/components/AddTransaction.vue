<script setup>
import { ref } from "vue";

const text = ref("");
const amount = ref();
console.log(text);
</script>
<template>
  <h3 class="text-xl font-semibold">Add new transaction</h3>
  <hr />
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control p-4">
      <label for="text" class="text-base">Text</label>
      <input
        class="border border-solid border-[#dedede] text-4 rounded-sm p-2.5"
        type="text"
        id="text"
        placeholder="Enter text..."
        v-model="text"
      />
    </div>
    <div class="form-control pb-4 pl-4 pr-4">
      <label for="amount" class="text-base"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="text"
        id="amount"
        placeholder="Enter amount..."
        v-model="amount"
        class="border border-solid border-[#dedede] text-4 rounded-sm p-2.5"
      />
    </div>
    <button class="btn btn-primary w-full">Add Transaction</button>
  </form>
</template>
