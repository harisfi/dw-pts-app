<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/fasilitas">fasilitas</RouterLink>
      <RouterLink to="/hiburan">hiburan</RouterLink>
      <RouterLink to="/pesan-tiket">pesan-tiket</RouterLink>
      <RouterLink to="/tukar-kupon">tukar-kupon</RouterLink>
      <RouterLink to="/hubungi-kami">hubungi-kami</RouterLink>
      <RouterLink to="/daftar">daftar</RouterLink>
      <RouterLink to="/masuk">masuk</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}
</style>
