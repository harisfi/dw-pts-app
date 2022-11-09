<script setup>
import Footer from "@/components/Footer.vue";
import facilities from "@/static/facilities.json";
</script>

<template>
  <div class="container-md mt-2">
    <section aria-label="hero" class="position-relative overflow-hidden mt-5">
      <img src="@/assets/images/hero-facilities.webp" alt="hero" class="w-md-100" />
      <div class="position-absolute top-0 left-0 h-100 w-100 z-2">
        <div class="d-flex flex-column justify-content-center h-100">
          <div class="text-center text-white">
            <h1 class="fw-bold mb-1">Fasilitas</h1>
            <p class="fs-3">
              Kami Memiliki Fasilitas Terlengkap yang Siap untuk Memanjakan Anda
            </p>
          </div>
        </div>
      </div>
      <div class="overlay position-absolute top-0 left-0 h-100 w-100 z-1"></div>
    </section>
    <section aria-label="fasilitas" class="my-5">
      <div class="row row-cols-1 row-cols-md-3 justify-content-between">
        <div v-for="(fac, idx) in facilities" :key="idx" class="col pb-4">
          <div class="card h-100 shadow-sm">
            <img :src="fac.image" class="card-img-top" :alt="fac.name" />
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-0">{{ fac.name }}</h5>
              <div class="stars">
                <img
                  v-for="(s, i) in fac.stars"
                  :key="i"
                  src="@/assets/images/star.png"
                  alt="star"
                />
              </div>
              <p class="card-text fs-7 fw-normal">{{ fac.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<style scoped></style>
