<script setup>
import imgFasilitas from "@/assets/k-fasilitas.png";
import imgHiburan from "@/assets/k-hiburan.png";
import imgAkses from "@/assets/k-akses.png";
import imgAnak from "@/assets/k-anak.png";

const adventages = [
  {
    image: imgFasilitas,
    title: "Fasilitas Lengkap",
    description:
      "Kami memiliki fasilitas yang lengkap untuk kenyamanan wisatawan.",
  },
  {
    image: imgHiburan,
    title: "Beragam Hiburan",
    description:
      "Beragam hiburan menarik tersedia di sini untuk menghibur para wisatawan.",
  },
  {
    image: imgAkses,
    title: "Akses Mudah",
    description:
      "Akses yang mudah serta lokasi yang strategis merupakan keunggulan kami.",
  },
  {
    image: imgAnak,
    title: "Ramah Anak",
    description:
      "Anda bisa mengajak keluarga Anda untuk melepas penat sehari-hari.",
  },
];
</script>

<template>
  <div class="position-absolute top-0 left-0 h-100 w-100">
    <section aria-label="hero" class="hero position-relative">
      <img
        src="@/assets/bg.png"
        alt="background"
        class="img-responsive w-md-100"
      />
      <div class="position-absolute top-0 left-0 h-100 w-100 z-3">
        <div class="container-md h-100">
          <div class="d-flex flex-column justify-content-center h-100">
            <div class="text-center text-md-start text-white">
              <h1>
                <div>Selamat Datang di</div>
                <div>Pantai Teluk Sanjaya</div>
              </h1>
              <p class="max-w-md-55">
                Pantai Teluk Sanjaya memiliki fasilitas yang lengkap serta
                berbagai hiburan menarik yang sayang untuk dilewatkan. Pantai
                Teluk Sanjaya juga memiliki lokasi yang strategis serta memiliki
                akses yang mudah untuk dijangkau.
                <br>
                Yuk! menangkan liburanmu
                bersama kami di Pantai Teluk Sanjaya.
              </p>
              <button class="btn btn-lg btn-primary w-fit shadow">
                Mulai Jelajahi
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="position-absolute z-2 bottom-0 left-0 w-100">
        <img
          src="@/assets/wave-hero.png"
          alt="wave-hero"
          class="img-responsive w-100"
        />
      </div>
      <div class="overlay position-absolute top-0 left-0 h-100 w-100 z-1"></div>
    </section>
    <section aria-label="keunggulan" class="bg-bluesea">
      <div class="container-md">
        <h2 class="text-center text-white py-5">
          <div class="fs-1">Kelebihan</div>
          <div>Pantai Teluk Sanjaya</div>
        </h2>
        <div
          class="d-flex flex-column flex-md-row justify-content-between align-items-center w-100"
        >
          <div v-for="(adv, idx) in adventages" :key="idx" class="mx-4">
            <div class="w-fit mx-auto">
              <img :src="adv.image" :alt="adv.title" />
            </div>
            <div class="text-center text-white">
              <h4 class="py-2">{{ adv.title }}</h4>
              <p class="h-5">{{ adv.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.7rem;
}
h1 div:first-child {
  font-weight: 400;
}
h1 div:last-child {
  font-weight: 600;
}

.bg-bluesea {
  background-color: #0099ff;
}
.h-5 {
  height: 5rem;
}
.overlay {
  background: rgba(0, 0, 0, 40%);
}
.z-1 {
  z-index: 1;
}
.z-2 {
  z-index: 2;
}
.z-3 {
  z-index: 3;
}

@media (min-width: 768px) {
  h1 {
    font-size: 4rem;
  }
  .max-w-md-55 {
    max-width: 55%;
  }
  .w-md-100 {
    width: 100%;
  }
}
</style>
