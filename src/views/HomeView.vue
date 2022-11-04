<template>
  <div class="position-absolute top-0 left-0 h-100 w-100">
    <section aria-label="hero" class="hero position-relative">
      <img
        src="@/assets/bg.png"
        alt="background"
        class="img-responsive w-md-100"
      />
      <div class="position-absolute top-0 left-0 h-100 w-100 z-3">
        <div class="container-md h-100">
          <div class="d-flex flex-column justify-content-center h-100">
            <div class="text-center text-md-start text-white">
              <h1>
                <div>Selamat Datang di</div>
                <div>Pantai Teluk Sanjaya</div>
              </h1>
              <p class="max-w-md-75">
                Voluptates fugit enim sit rerum totam ex praesentium molestiae.
                Sed tempore explicabo necessitatibus voluptates praesentium
                necessitatibus vel id enim. Maxime ut quis esse ut omnis. Non
                qui et exercitationem tempora id maxime. Dolor laborum
                dignissimos sed quidem praesentium. Modi aut aperiam.
              </p>
              <button class="btn btn-lg btn-primary w-fit shadow">
                Mulai Jelajahi
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="position-absolute z-2 bottom-0 left-0 w-100">
        <img
          src="@/assets/wave-hero.png"
          alt="wave-hero"
          class="img-responsive w-100"
        />
      </div>
      <div class="overlay position-absolute top-0 left-0 h-100 w-100 z-1"></div>
    </section>
  </div>
</template>

<style scoped>
.z-1 {
  z-index: 1;
}
.z-2 {
  z-index: 2;
}
.z-3 {
  z-index: 3;
}
.overlay {
  background: rgba(0, 0, 0, 40%);
}
h1 {
  font-size: 2.7rem;
}
h1 div:first-child {
  font-weight: 400;
}
h1 div:last-child {
  font-weight: 600;
}

@media (min-width: 768px) {
  h1 {
    font-size: 4rem;
  }
  .max-w-md-75 {
    max-width: 75%;
  }
  .w-md-100 {
    width: 100%;
  }
}
</style>
