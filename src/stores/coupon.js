import { ref } from "vue";
import { defineStore } from "pinia";
import { getCode } from "../utils/formatter";

export const useCouponStore = defineStore("coupon", () => {
  const expDate = new Date();
  expDate.setDate(expDate.getDate() + 1);

  const ls = localStorage.getItem("coupons");
  const initialCoupons = [
    {
      code: getCode(),
      expDate: +expDate,
      isExchanged: false,
    },
    {
      code: getCode(1),
      expDate: +expDate,
      isExchanged: true,
    },
  ];

  if (!ls) {
    localStorage.setItem("coupons", JSON.stringify(initialCoupons));
  }

  const lsCoupons = JSON.parse(localStorage.getItem("coupons"));
  const coupons = ref(lsCoupons);

  function addCoupon(plusNum) {
    expDate.setTime(+new Date());
    expDate.setFullYear(expDate.getFullYear() + 1);

    coupons.value.push({
      code: getCode(plusNum),
      expDate: +expDate,
      isExchanged: false,
    });
    localStorage.setItem("coupons", JSON.stringify(coupons.value));
  }

  function exchangeAll() {
    let exchanged = 0;

    coupons.value = coupons.value.map((c) => {
      if (new Date(c.expDate) > new Date() && !c.isExchanged) {
        exchanged++;
        return { ...c, isExchanged: true };
      } else {
        return c;
      }
    });
    localStorage.setItem("coupons", JSON.stringify(coupons.value));

    return exchanged;
  }

  return { coupons, addCoupon, exchangeAll };
});
