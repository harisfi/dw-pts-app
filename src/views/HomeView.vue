<script setup>
import Footer from "@/components/Footer.vue";
import adventages from "@/static/adventages.json";
</script>

<template>
  <div class="position-absolute top-0 left-0 h-100 w-100">
    <section aria-label="hero" class="hero position-relative">
      <img
        src="@/assets/images/hero-home.webp"
        alt="background"
        class="w-md-100"
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
                <br />
                Yuk! menangkan liburanmu bersama kami di Pantai Teluk Sanjaya.
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
          src="@/assets/images/wave-hero.png"
          alt="wave-hero"
          class="w-100"
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
    <section aria-label="lokasi" class="position-relative">
      <div class="position-relative z-2 top-0 left-0 w-100">
        <img
          src="@/assets/images/wave-location.png"
          alt="wave-location"
          class="w-100"
        />
      </div>
      <div class="position-relative container-md z-2">
        <div class="row row-cols-1 row-cols-md-2 align-items-center">
          <div class="col text-center text-md-start">
            <h2 class="display-5 fw-semibold">
              Lokasi<span class="d-none d-md-inline"> ⟶</span>
            </h2>
            <h3 class="fs-2 fw-semibold">Pantai Teluk Sanjaya</h3>
            <p class="max-w-md-90">
              Dengan berlokasi di dekat perkotaan dan pemukiman warga, Pantai
              Teluk Sanjaya memiliki akses yang mudah berupa jalan raya yang
              dapat Anda tuju dengan mudah dan dalam waktu yang tidak lama.
            </p>
          </div>
          <div class="col">
            <div class="ratio ratio-1x1">
              <iframe
                src="https://maps.google.com/maps?q=kenjeran&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="position-absolute top-0 left-0 w-100 h-100 z-1">
        <img src="@/assets/images/shapes.png" alt="shapes" class="w-100" />
      </div>
    </section>
    <Footer />
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

.h-5 {
  height: 5rem;
}

@media (min-width: 768px) {
  h1 {
    font-size: 4rem;
  }
  .max-w-md-55 {
    max-width: 55%;
  }
  .max-w-md-90 {
    max-width: 90%;
  }
}
</style>
