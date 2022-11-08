<script setup>
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="container-md mt-5">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col bg-gray p-5">
        <div class="d-flex flex-column justify-content-center h-100">
          <div class="text-center text-md-start mb-2">
            <h1 class="fw-bold mb-4">Hubungi Kami</h1>
            <p>
              Ada pertanyaan yang ingin disampaikan, atau hanya sekedar ingin
              mengirim pesan silakan gunakan form ini.
            </p>
          </div>
          <p class="text-secondary mb-3">
            Kantor Pengelolaan Pantai Teluk Sanjaya
            <br />
            Jl. Raya Pantai, Teluk Sanjaya
          </p>
          <p class="text-secondary">
            📞 +62 (01) 234 567 890
            <br />
            📩 info@pantaiteluksanjaya.com
          </p>
        </div>
      </div>
      <div class="col px-md-5">
        <form class="my-5">
          <div class="mb-3">
            <input
              type="text"
              class="form-control shadow-sm rounded-3 py-2"
              id="name"
              placeholder="Nama"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control shadow-sm rounded-3 py-2"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="tel"
              class="form-control shadow-sm rounded-3 py-2"
              id="tel"
              placeholder="Telepon"
              required
            />
          </div>
          <div class="mb-3">
            <textarea
              class="form-control shadow-sm rounded-3 py-2"
              id="message"
              placeholder="Pesan"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Kirim</button>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
textarea {
  resize: none;
}
.bg-gray {
  background-color: #f2f2f2;
}
</style>
