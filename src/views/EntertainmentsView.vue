<script setup>
import imgTarian from "@/assets/entertainments/tarian.png";
import imgSnorkeling from "@/assets/entertainments/snorkeling.png";
import imgJetski from "@/assets/entertainments/jetski.png";
import imgBananaBoat from "@/assets/entertainments/banana-boat.png";
import imgSelancar from "@/assets/entertainments/selancar.png";
import imgMusik from "@/assets/entertainments/musik.png";

const entertainments = [
  {
    name: "Tarian Lokal",
    description:
      "Anda dapat menyaksikkan beragam tarian lokal yang diselenggarakan pada acara atau hari-hari tertentu.",
    image: imgTarian,
    stars: 5,
  },
  {
    name: "Snorkeling",
    description:
      "Laut yang masih alami dapat Anda nikmati dengan snorkeling dan didampingi oleh pendamping kami yang berpengalaman.",
    image: imgSnorkeling,
    stars: 5,
  },
  {
    name: "Jetski",
    description:
      "Kami menyediakan jetski untuk anda yang memiliki semangat berlibur di laut dan juga suka memacu andrenalin.",
    image: imgJetski,
    stars: 5,
  },
  {
    name: "Banana Boat",
    description:
      "Banana Boat cocok untuk Anda yang ingin menikmati laut bersama teman-teman Anda atau keluarga Anda.",
    image: imgBananaBoat,
    stars: 5,
  },
  {
    name: "Selancar",
    description:
      "Pantai kami memiliki ombak yang cocok untuk Anda yang hobi berselancar, kami juga menyediakan perlengkapannya untuk Anda.",
    image: imgSelancar,
    stars: 5,
  },
  {
    name: "Musik",
    description:
      "Musik merupakan hiburan yang cocok untuk Anda yang ingin bersantai dan melepas kepenatan pekerjaan sehari-hari.",
    image: imgMusik,
    stars: 5,
  },
];
</script>

<template>
  <div class="container-md mt-2">
    <section aria-label="hero" class="position-relative overflow-hidden mt-5">
      <img src="@/assets/entertainments/hero.png" alt="hero" class="w-md-100" />
      <div class="position-absolute top-0 left-0 h-100 w-100 z-2">
        <div class="d-flex flex-column justify-content-center h-100">
          <div class="text-center text-white">
            <h1 class="fw-bold mb-1">Hiburan</h1>
            <p class="fs-3">
              Beragam Hiburan Telah Tersedia untuk Mewarnai Liburan Anda
            </p>
          </div>
        </div>
      </div>
      <div class="overlay position-absolute top-0 left-0 h-100 w-100 z-1"></div>
    </section>
    <section aria-label="fasilitas" class="my-5">
      <div class="row row-cols-1 row-cols-md-3 justify-content-between">
        <div v-for="(ent, idx) in entertainments" :key="idx" class="col pb-4">
          <div class="card h-100 shadow-sm">
            <img :src="ent.image" class="card-img-top" :alt="ent.name" />
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-0">{{ ent.name }}</h5>
              <div class="stars">
                <img
                  v-for="(s, i) in ent.stars"
                  :key="i"
                  src="@/assets/star.png"
                  alt="star"
                />
              </div>
              <p class="card-text fs-7 fw-normal">{{ ent.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
