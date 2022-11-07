<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";

const router = useRouter();
const isHome = ref(false);
const expandNavbar = ref(false);
const showNavbar = ref(true);

router.afterEach((to) => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 128);

  isHome.value = to.fullPath === "/";
  expandNavbar.value = false;

  toggleNavbar();
});

function toggleOffcanvas() {
  expandNavbar.value = !expandNavbar.value;
}

function doScroll() {
  showNavbar.value = window.scrollY > 10;
}

function toggleNavbar() {
  if (isHome.value) {
    showNavbar.value = false;
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", doScroll);
    }
  } else {
    showNavbar.value = true;
    window.removeEventListener("scroll", doScroll);
  }
}

onBeforeMount(() => {
  toggleNavbar();
});
</script>

<template>
  <nav
    :class="
      'navbar navbar-expand-lg fixed-top navbar-dark' +
      (isHome ? ' nav-home' : '') +
      (showNavbar || expandNavbar ? ' bg-primary' : '')
    "
    aria-label="Main navigation"
  >
    <div class="container-md">
      <RouterLink to="/" class="navbar-brand">
        <img
          src="@/assets/images/logo.png"
          alt="Logo Pantai Teluk Sanjaya"
          width="50"
          height="40"
        />
      </RouterLink>

      <button
        class="navbar-toggler p-0 border-0"
        type="button"
        @click="toggleOffcanvas"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        :class="
          'navbar-collapse offcanvas-collapse mt-2 mt-md-0' +
          (expandNavbar ? ' open' : '')
        "
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" active-class="active">
              Beranda
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/fasilitas" class="nav-link" active-class="active">
              Fasilitas
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/hiburan" class="nav-link" active-class="active">
              Hiburan
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/pesan-tiket"
              class="nav-link"
              active-class="active"
            >
              Pesan Tiket
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/tukar-kupon"
              class="nav-link"
              active-class="active"
            >
              Tukar Kupon
            </RouterLink>
          </li>
        </ul>
        <div class="d-flex">
          <RouterLink
            to="/daftar"
            :class="
              'btn-nav btn fw-600 me-2' +
              (expandNavbar ? ' w-100' : '') +
              (showNavbar || expandNavbar ? ' btn-light' : ' btn-primary')
            "
          >
            Daftar
          </RouterLink>
          <RouterLink
            to="/masuk"
            :class="
              'btn-nav btn text-light fw-600' +
              (showNavbar ? ' btn-primary' : '') +
              (expandNavbar ? ' w-100 btn-light text-dark' : '')
            "
          >
            Masuk
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 991.98px) {
  .offcanvas-collapse {
    position: fixed;
    top: 56px;
    bottom: 0;
    left: 100%;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow-y: auto;
    visibility: hidden;
    background-color: var(--bs-primary);
    transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
  .offcanvas-collapse.open {
    visibility: visible;
    transform: translateX(-100%);
  }
}
.nav-link.active {
  font-weight: 600;
}
.nav-home {
  transition: 0.5s ease-in-out;
}
.btn-nav {
  transition: all 0.6s ease-in-out;
}
</style>
