import Dashboard from "@/views/Dashboard.vue";
import Transaction from "@/views/Transaction.vue";

import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import AboutView from "@/views/AboutView.vue";
// import App from "@/App.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      // component: AboutView,
    },
    {
      path: "/transaction",
      name: "transaction",
      component: Transaction,
    },
  ],
});

export default router;
