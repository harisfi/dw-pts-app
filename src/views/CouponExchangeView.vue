<script setup>
import Footer from "@/components/Footer.vue";
import { useCouponStore } from "@/stores/coupon";
import { formatDate } from "@/utils/formatter";
import { ref } from "@vue/reactivity";
import bootstrap from "bootstrap/dist/js/bootstrap";

const couponStore = useCouponStore();
const successExchange = ref(false);
const exchangeCount = ref(0);

function doExchange() {
  exchangeCount.value = couponStore.exchangeAll();
  successExchange.value = exchangeCount.value > 0;
  const myModal = new bootstrap.Modal("#modalInfo");
  myModal.show();
}
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
        <tr v-for="(c, i) in couponStore.coupons" :key="c.code">
          <td>{{ i + 1 }}.</td>
          <td>{{ c.code }}</td>
          <td>{{ formatDate(c.expDate) }}</td>
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
      <button @click="doExchange" class="btn btn-primary">Tukar Semua</button>
    </div>
  </div>
  <Footer />
  <div
    class="modal fade"
    id="modalInfo"
    tabindex="-1"
    aria-labelledby="modalInfoLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalInfoLabel">
            {{ successExchange ? "Berhasil" : "Gagal" }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{
            successExchange
              ? `Yay! Anda mendapatkan ${exchangeCount} tiket gratis`
              : "Tidak ada kupon yang bisa ditukarkan"
          }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Tutup
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
