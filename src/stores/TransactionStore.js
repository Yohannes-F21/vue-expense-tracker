import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
// import expenses from "@/expenses";

export const useTransactionStore = defineStore("transaction", () => {
  const expensesList = reactive([
    {
      id: 1,
      text: "Groceries",
      amount: 50.0,
    },
    {
      id: 2,
      text: "Dinner with friends",
      amount: 80.0,
    },
    {
      id: 3,
      text: "Gasoline",
      amount: 40.0,
    },
    {
      id: 4,
      text: "Movie tickets",
      amount: 25.0,
    },
    {
      id: 5,
      text: "Coffee",
      amount: 5.0,
    },
  ]);
  const total = ref(0);
  const income = ref(0);
  const expense = ref(0);

  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  const totalBalance = computed(() => {
    return (total.value = expensesList.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }));
  });

  return { expensesList, total, income, expense, totalBalance };
});
