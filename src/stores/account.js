import { ref } from "vue";
import { defineStore } from "pinia";

export const useAccountStore = defineStore("account", () => {
  const loggedIn = ref(localStorage.getItem("logged_in") === "true");

  function logIn() {
    loggedIn.value = true;
    localStorage.setItem("logged_in", "true");
  }

  function logOut() {
    loggedIn.value = false;
    localStorage.setItem("logged_in", "false");
  }

  return { loggedIn, logIn, logOut };
});
