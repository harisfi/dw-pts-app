<script setup>
import Footer from "@/components/Footer.vue";
import { useRouter } from "vue-router";
import bootstrap from "bootstrap/dist/js/bootstrap";
import { onMounted } from "@vue/runtime-core";

const router = useRouter();
let myModal;

function handleSubmit(event) {
  event.preventDefault();
  showModal();
}

function showModal() {
  myModal.show();
}

function redirectToLoginPage() {
  myModal.hide();
  router.push("/masuk");
}

onMounted(() => {
  myModal = new bootstrap.Modal("#modalSuccess");
})
</script>

<template>
  <div class="container-md mt-5">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <div
          class="d-none d-md-flex justify-content-center align-items-center h-100"
        >
          <img src="@/assets/images/beach.png" alt="beach" class="img-fluid" />
        </div>
      </div>
      <div class="col px-md-5">
        <div class="text-center text-md-start">
          <h1 class="h2 fw-semibold">Selamat Datang!</h1>
          <h5>Silakan daftar untuk melanjutkan</h5>
        </div>
        <form @submit="handleSubmit" class="mt-5 mb-3">
          <div class="mb-3">
            <label for="name" class="form-label">Nama</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Masukkan password Anda"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">
            Daftar Sekarang
          </button>
        </form>
        <div class="mb-3 text-center">atau</div>
        <button
          @click="showModal"
          class="btn btn-light d-flex flex-column flex-md-row justify-content-center align-items-center shadow w-100 mb-3"
        >
          <img
            src="@/assets/images/google.png"
            alt="google"
            class="img-fluid mb-2 mb-md-0 me-md-2"
          />
          Daftar Menggunakan Akun Google
        </button>
        <button
          @click="showModal"
          class="btn btn-light d-flex flex-column flex-md-row justify-content-center align-items-center shadow w-100"
        >
          <img
            src="@/assets/images/facebook.png"
            alt="facebook"
            class="img-fluid mb-2 mb-md-0 me-md-2"
          />
          Daftar Menggunakan Akun Facebook
        </button>
      </div>
    </div>
  </div>
  <Footer />
  <div
    class="modal fade"
    id="modalSuccess"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Berhasil</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Silakan masuk untuk melanjutkan</div>
        <div class="modal-footer">
          <button @click="redirectToLoginPage" class="btn btn-primary">
            Masuk
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
