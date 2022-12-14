import { createRouter, createWebHistory } from "vue-router";
import pinia from "@/stores/store";
import { useAccountStore } from "@/stores/account";

const appTitle = "Pantai Teluk Sanjaya";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Beranda",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/fasilitas",
      name: "Fasilitas",
      component: () => import("../views/FacilitiesView.vue"),
    },
    {
      path: "/hiburan",
      name: "Hiburan",
      component: () => import("../views/EntertainmentsView.vue"),
    },
    {
      path: "/pesan-tiket",
      name: "Pesan Tiket",
      component: () => import("../views/TicketBookingView.vue"),
    },
    {
      path: "/tukar-kupon",
      name: "Tukar Kupon",
      component: () => import("../views/CouponExchangeView.vue"),
    },
    {
      path: "/hubungi-kami",
      name: "Hubungi Kami",
      component: () => import("../views/ContactUsView.vue"),
    },
    {
      path: "/masuk",
      name: "Masuk",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/daftar",
      name: "Daftar",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Not Found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

const account = useAccountStore(pinia);
router.beforeEach((to, _, next) => {
  if (!account.loggedIn) {
    if (to.path === "/pesan-tiket" || to.path === "/tukar-kupon") {
      return next("/masuk");
    }
  } else {
    if (to.path === "/masuk" || to.path === "/daftar") {
      return next("/");
    }
  }

  document.title = `${to.name} - ${appTitle}`;
  next();
});

export default router;
