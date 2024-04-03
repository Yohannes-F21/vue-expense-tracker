<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header></Header>
    <main>
      <RouterView />
    </main>
    <Footer class="mt-auto"></Footer>
  </div>
</template>

<style scoped></style>
