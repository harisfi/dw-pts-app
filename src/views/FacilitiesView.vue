<script setup>
import imgPenginapan from "@/assets/facilities/penginapan.png";
import imgFoodCourt from "@/assets/facilities/food-court.png";
import imgParkir from "@/assets/facilities/tempat-parkir.png";
import imgToilet from "@/assets/facilities/toilet-umum.png";
import imgKafe from "@/assets/facilities/kafe.png";
import imgToko from "@/assets/facilities/toko-oleh-oleh.png";

const facilities = [
  {
    name: "Penginapan",
    description:
      "Kami menyediakan penginapan terbaik yang menawarkan tempat yang aman dan nyaman untuk wisatawan.",
    image: imgPenginapan,
    stars: 5,
  },
  {
    name: "Food Court",
    description:
      "Beragam makanan lokal  dengan rempah-rempah yang dapat menggugah selera makan Anda.",
    image: imgFoodCourt,
    stars: 5,
  },
  {
    name: "Tempat Parkir",
    description:
      "Tempat parkir yang luas serta aman untuk kendaraan pribadi seperti mobil dan sepeda motor dan juga untuk bis pariwisata.",
    image: imgParkir,
    stars: 5,
  },
  {
    name: "Toilet Umum",
    description:
      "Toilet umum untuk pria dan wanita yang selalu kami jaga kebersihan dan keamanannya.",
    image: imgToilet,
    stars: 5,
  },
  {
    name: "Kafe",
    description:
      "Kami menyediakan fasilitas kafe untuk wisatawan yang ingin mencicipi kopi buatan lokal yang memiliki cita rasa tersendiri.",
    image: imgKafe,
    stars: 5,
  },
  {
    name: "Toko Oleh-oleh",
    description:
      "Terdapat berbagai macam oleh-oleh serta kerajinan buatan masyarakat lokal yang dapat anda beli di toko oleh-oleh.",
    image: imgToko,
    stars: 5,
  },
];
</script>

<template>
  <div class="container-md mt-2">
    <section aria-label="hero" class="position-relative overflow-hidden mt-5">
      <img src="@/assets/facilities/hero.png" alt="hero" class="w-md-100" />
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
                  src="@/assets/star.png"
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
</template>

<style scoped></style>
