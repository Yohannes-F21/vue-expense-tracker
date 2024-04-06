<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { useToast } from "vue-toastification";
const toast = useToast();
import { useTransactionStore } from "../stores/TransactionStore";
let transaction = useTransactionStore();
let noID = transaction.expensesList.length + 1;
onMounted(() => {
  // console.log(noID);
  // console.log(transaction.expensesList);
});
// const text = ref("");
// const amount = ref(0);
const formData = reactive({
  id: noID,
  text: " ",
  amount: null,
});

const onSubmit = () => {
  if (!formData.text || !formData.amount) {
    toast.error("Both fields must be filled");
    return;
  }
  if (
    transaction.totalBalance <= 0 ||
    transaction.totalBalance < Math.abs(formData.amount)
  ) {
    toast.error("You are out of BALANCE");
    return;
  }
  transaction.expensesList.push(formData);
  toast.success("Transaction successfully Added ");
  router.push("/dashboard");
};
</script>
<template>
  <h3 class="text-xl font-semibold">Add new transaction</h3>
  <hr />
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control p-4">
      <label for="text" class="text-base">Text</label>
      <input
        class="border border-solid border-[#dedede] text-4 rounded-sm p-2"
        type="text"
        id="text"
        placeholder="Enter text..."
        v-model="formData.text"
      />
    </div>
    <div class="form-control pb-4 pl-4 pr-4">
      <label for="amount" class="text-base"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="number"
        id="amount"
        placeholder="Enter amount..."
        v-model="formData.amount"
        class="border border-solid border-[#dedede] text-4 rounded-sm p-2"
      />
    </div>
    <button class="btn btn-primary ml-5 w-[90%]">Add Transaction</button>
  </form>
</template>
