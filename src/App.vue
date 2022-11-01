<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
body {
  padding-top: 56px;
}
</style>
