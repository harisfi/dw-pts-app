<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="position-absolute top-0 left-0 h-100 w-100">
    <img
      src="@/assets/images/hero-home.webp"
      alt="background"
      class="position-absolute top-0 left-0 h-100 w-100 z-1"
    />
    <div class="position-absolute top-0 left-0 h-100 w-100 z-2">
      <div class="container-md h-100">
        <div class="d-flex flex-column justify-content-center h-100">
          <div class="text-center text-white">
            <h1>404 Not Found</h1>
            <p>Halaman yang Anda cari tidak ditemukan.</p>
            <RouterLink to="/" class="btn btn-lg btn-primary w-fit shadow">
              Kembali Ke Beranda
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay position-absolute top-0 left-0 h-100 w-100 z-1"></div>
  </div>
</template>
