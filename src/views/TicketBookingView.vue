<script setup>
import Footer from "@/components/Footer.vue";
import { useCouponStore } from "@/stores/coupon";
import { reactive, ref } from "@vue/reactivity";
import { convertToRupiah } from "@/utils/formatter";
import bootstrap from "bootstrap/dist/js/bootstrap";

const couponStore = useCouponStore();
const tickets = reactive({
  value: [
    {
      category: "Dewasa",
      price: 20000,
      qty: 0,
      subtotal: 0,
    },
    {
      category: "Anak-anak",
      price: 10000,
      qty: 0,
      subtotal: 0,
    },
  ],
});
const totalPrice = ref(0);
const couponsCount = ref(0);

function calcPrice() {
  totalPrice.value = 0;

  tickets.value = tickets.value.map((t) => {
    const subtotal = t.price * t.qty;
    totalPrice.value += subtotal;
    return {
      ...t,
      subtotal,
    };
  });
}

function bookNow() {
  let qty = 0;

  tickets.value.forEach((t) => (qty += t.qty));
  couponsCount.value = Math.floor(qty / 2);

  for (let i = 0; i < couponsCount.value; i++) {
    couponStore.addCoupon(i);
  }

  const myModal = new bootstrap.Modal("#modalInfo");
  myModal.show();
}
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
        <tr v-for="t in tickets.value" :key="t.category">
          <td class="align-middle">{{ t.category }}</td>
          <td class="align-middle">{{ convertToRupiah(t.price) }}</td>
          <td class="w-25">
            <input
              class="form-control w-100"
              type="number"
              placeholder="0"
              min="0"
              max="100"
              v-model="t.qty"
              @change="calcPrice"
            />
          </td>
          <td class="align-middle">{{ convertToRupiah(t.subtotal) }}</td>
        </tr>
        <tr>
          <td colspan="2"></td>
          <td class="fw-bold">Total</td>
          <td class="fw-bold">{{ convertToRupiah(totalPrice) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-end">
      <button
        @click="bookNow"
        :disabled="totalPrice === 0"
        class="btn btn-primary"
      >
        Pesan Sekarang
      </button>
    </div>
  </div>
  <Footer :in-ticket-booking-page="true" />
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
          <h1 class="modal-title fs-5" id="modalInfoLabel">Berhasil</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Pemesanan tiket telah berhasil{{
            couponsCount > 0 ? `, Anda mendapatkan ${couponsCount} kupon` : ""
          }}, selamat menikmati liburan Anda :&rpar;
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
