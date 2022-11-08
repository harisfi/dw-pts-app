<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="position-relative z-3">
    <img src="@/assets/images/wave-footer.svg" alt="footer" />
    <div class="content fw-500 bg-bluesea">
      <div class="container-md text-white">
        <div class="text-center">
          <div class="fs-1 py-3">
            Yuk, Menangkan Liburanmu Bersama Kami
          </div>
          <RouterLink to="/pesan-tiket" class="btn btn-lg btn-light">
            Pesan Tiket
          </RouterLink>
        </div>
      </div>
      <div class="container-fluid text-white mt-5 pt-5 pb-2">
        <div class="d-flex flex-column flex-md-row justify-content-around mx-md-5 px-md-5 w-100">
          <div class="d-flex justify-content-center align-items-center me-md-4">
            <img src="@/assets/images/logo.png" alt="logo" height="80" class="me-3">
            <img src="@/assets/images/wonderful-id.png" alt="logo" height="80">
          </div>
          <div class="row row-cols-2 row-cols-md-4 ms-0 mt-5 mt-md-0 w-100">
            <div class="col mb-4 mb-md-0">
              <div class="h5 mb-3">Tautan</div>
              <RouterLink to="/" class="d-block link mb-1">Beranda</RouterLink>
              <RouterLink to="/fasilitas" class="d-block link mb-1">Fasilitas</RouterLink>
              <RouterLink to="/hiburan" class="d-block link mb-1">Hiburan</RouterLink>
            </div>
            <div class="col mb-4 mb-md-0">
              <div class="h5 mb-3">Layanan</div>
              <RouterLink to="/pesan-tiket" class="d-block link mb-1">Pesan Tiket</RouterLink>
              <RouterLink to="/tukar-kupon" class="d-block link mb-1">Tukar Kupon</RouterLink>
              <RouterLink to="/hubungi-kami" class="d-block link mb-1">Hubungi Kami</RouterLink>
            </div>
            <div class="col">
              <div class="h5 mb-3">Akun</div>
              <RouterLink to="/daftar" class="d-block link mb-1">Daftar</RouterLink>
              <RouterLink to="/masuk" class="d-block link mb-1">Masuk</RouterLink>
            </div>
            <div class="col">
              <div class="h5 mb-3">Media Sosial</div>
              <RouterLink to="/" class="d-block link mb-1">Instagram</RouterLink>
              <RouterLink to="/" class="d-block link mb-1">Twitter</RouterLink>
            </div>
          </div>
        </div>
        <div class="border-top text-center text-white mx-md-5 mt-5 pt-2">
          Copyright &amp; Design By Muhammad&nbsp;Haris&nbsp;Firmansyah
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.content {
  margin-top: -1px;
}
.link {
  color: var(--bs-light);
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
</style>
