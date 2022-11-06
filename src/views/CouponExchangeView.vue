<script setup>
import Footer from "@/components/Footer.vue";

const coupons = [
  {
    code: "ABC-DEF-1234",
    expDate: "9 Oktober 2022",
    isExchanged: true,
  },
  {
    code: "ABC-DEF-1234",
    expDate: "9 Oktober 2022",
    isExchanged: false,
  },
];
</script>

<template>
  <div class="container-md mt-5">
    <h1 class="display-5 fw-bold mb-4">Tukar Kupon</h1>
    <table class="table">
      <thead>
        <tr>
          <th class="align-middle">No.</th>
          <th class="align-middle">Kode Kupon</th>
          <th class="align-middle">Tanggal Kedaluarsa</th>
          <th class="align-middle">Sudah Ditukar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, i) in coupons" :key="c.code">
          <td>{{ i + 1 }}.</td>
          <td>{{ c.code }}</td>
          <td>{{ c.expDate }}</td>
          <td>
            <span
              :class="
                'rounded-pill px-3 badge bg-' +
                (c.isExchanged ? 'danger' : 'success')
              "
            >
              {{ c.isExchanged ? "Sudah" : "Belum" }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-end">
      <button class="btn btn-primary">Tukar Semua</button>
    </div>
  </div>
  <Footer />
</template>
