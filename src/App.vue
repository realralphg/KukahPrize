<template>
  <div class="loading" data-loading>
    <img :src="logo" alt="" />
  </div>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import logo from "./assets/logo.svg";
onMounted(() => {
  // PRELOADING
  const loadingElement = document.querySelector("[data-loading]");
  window.addEventListener("load", function () {
    loadingElement.classList.add("loaded");
    document.body.classList.remove("active");
  });
});
</script>
