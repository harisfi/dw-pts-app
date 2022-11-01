<script setup>
import { RouterLink } from "vue-router";
import { ref } from "@vue/reactivity";

const expandNavbar = ref(false);

function toggleNavbar() {
  expandNavbar.value = !expandNavbar.value;
}
</script>

<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary"
    aria-label="Main navigation"
  >
    <div class="container-md">
      <RouterLink to="/" class="navbar-brand">
        <img
          src="@/assets/logo.png"
          alt="Logo Pantai Teluk Sanjaya"
          width="50"
          height="40"
        />
      </RouterLink>

      <button
        class="navbar-toggler p-0 border-0"
        type="button"
        @click="toggleNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        :class="
          'navbar-collapse offcanvas-collapse mt-2 mt-md-0' + (expandNavbar ? ' open' : '')
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
            <RouterLink to="/pesan-tiket" class="nav-link" active-class="active">
              Pesan Tiket
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/tukar-kupon" class="nav-link" active-class="active">
              Tukar Kupon
            </RouterLink>
          </li>
        </ul>
        <div class="d-flex">
          <RouterLink to="/daftar" class="btn btn-light fw-normal me-2">
            Daftar
          </RouterLink>
          <RouterLink to="/masuk" class="btn btn-primary fw-normal">
            Masuk
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
@media (max-width: 991.98px) {
  .offcanvas-collapse {
    position: fixed;
    top: 56px; /* Height of navbar */
    bottom: 0;
    left: 100%;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow-y: auto;
    visibility: hidden;
    background-color: #343a40;
    transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
  .offcanvas-collapse.open {
    visibility: visible;
    transform: translateX(-100%);
  }
}

.nav-scroller .nav {
  color: rgba(255, 255, 255, 0.75);
}

.nav-scroller .nav-link {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
  color: #6c757d;
}

.nav-scroller .nav-link:hover {
  color: #007bff;
}

.nav-scroller .active {
  font-weight: 500;
  color: #343a40;
}

.bg-purple {
  background-color: #6f42c1;
}
</style>
