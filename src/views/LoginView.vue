<script setup>
import Footer from "@/components/Footer.vue";
import { useAccountStore } from "@/stores/account";
import { useRouter } from "vue-router";
import bootstrap from "bootstrap/dist/js/bootstrap";

const account = useAccountStore();
const router = useRouter();

function handleSubmit(event) {
  event.preventDefault();
  login();
}

function login() {
  account.logIn();
  const toast = new bootstrap.Toast("#toastSuccess");
  toast.show();
  setTimeout(() => {
    window.location = '/';
  }, 1250);
}
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
          <h5>Silakan masuk untuk melanjutkan</h5>
        </div>
        <form @submit="handleSubmit" class="mt-5 mb-3">
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
          <button type="submit" class="btn btn-primary w-100">Masuk</button>
        </form>
        <div class="mb-3 text-center">atau</div>
        <button
          @click="login"
          class="btn btn-light d-flex flex-column flex-md-row justify-content-center align-items-center shadow w-100 mb-3"
        >
          <img
            src="@/assets/images/google.png"
            alt="google"
            class="img-fluid mb-2 mb-md-0 me-md-2"
          />
          Masuk Menggunakan Akun Google
        </button>
        <button
          @click="login"
          class="btn btn-light d-flex flex-column flex-md-row justify-content-center align-items-center shadow w-100"
        >
          <img
            src="@/assets/images/facebook.png"
            alt="facebook"
            class="img-fluid mb-2 mb-md-0 me-md-2"
          />
          Masuk Menggunakan Akun Facebook
        </button>
      </div>
    </div>
  </div>
  <Footer />

  <div class="toast-container position-fixed top-0 end-0 p-3">
    <div
      id="toastSuccess"
      class="toast align-items-center text-bg-success border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">Berhasil masuk</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>
