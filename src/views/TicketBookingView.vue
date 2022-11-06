<script setup>
import Footer from "@/components/Footer.vue";

const tickets = [
  {
    category: 'Dewasa',
    price: 123456,
    qty: 0,
    subtotal: 0,
  },
  {
    category: 'Anak-anak',
    price: 123456,
    qty: 0,
    subtotal: 0,
  },
];
</script>

<template>
  <div class="container-md mt-5">
    <h1 class="display-5 fw-bold mb-4">Pesan Tiket</h1>
    <table class="table">
      <thead>
        <tr>
          <th class="align-middle">Jenis Kategori</th>
          <th class="align-middle">Harga per Tiket</th>
          <th class="align-middle">Kuantitas</th>
          <th class="align-middle">Jumlah</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in tickets" :key="t.category">
          <td>{{t.category}}</td>
          <td>{{t.price}}</td>
          <td>{{t.qty}}</td>
          <td>{{t.subtotal}}</td>
        </tr>
        <tr>
          <td colspan="2"></td>
          <td class="fw-bold">Total</td>
          <td class="fw-bold">123</td>
        </tr>
      </tbody>
    </table>
    <div class="text-end">
      <button class="btn btn-primary">Pesan Sekarang</button>
    </div>
  </div>
  <Footer />
</template>
