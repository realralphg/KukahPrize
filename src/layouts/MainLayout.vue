<template>
  <q-layout view="lHh Lpr lFf">
    <header class="header row justify-between items-center">
      <div class="container">
        <div class="navbar">
          <div class="">
            <router-link to="/">
              <img src="../assets/logo.svg" alt="" />
            </router-link>
          </div>

          <nav>
            <ul>
              <li>
                <q-btn @click="goto('timeline')" class="nav_item" flat no-caps>
                  Home
                </q-btn>
              </li>
              <li>
                <q-btn @click="goto('timeline')" class="nav_item" flat no-caps>
                  Introduction
                </q-btn>
              </li>
              <li>
                <q-btn @click="goto('overview')" class="nav_item" flat no-caps>
                  The winners
                </q-btn>
              </li>
              <li>
                <q-btn @click="goto('faq')" class="nav_item" flat no-caps>
                  Event
                </q-btn>
              </li>
              <li>
                <q-btn @click="goto('faq')" class="nav_item" flat no-caps>
                  Gallery
                </q-btn>
              </li>
              <li>
                <q-btn @click="goto('faq')" class="nav_item" flat no-caps>
                  Meet the Judges
                </q-btn>
              </li>
            </ul>
          </nav>

          <q-btn
            :to="{ name: 'contact' }"
            class="nav_item contact"
            flat
            no-caps
          >
            Partner with us
          </q-btn>

          <q-btn @click="toggleNav" flat no-caps class="menu">
            <img src="../assets/menu.svg" alt="" />
          </q-btn>
          <q-btn @click="toggleNav" flat no-caps class="close">
            <img src="../assets/cancel.svg" alt="" />
          </q-btn>
        </div>
      </div>
    </header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  // mounted() {
  //   console.log(this.$router.currentRoute.value.name);
  // },

  watch: {
    $route(to, from) {
      let nav = document.querySelector(".header");
      let body = document.querySelector("body");
      console.log(to, from);
      if (to.name !== from.name) {
        body.classList.remove("no_scroll");
        nav.classList.remove("active");
      }
      // console.log("first");
    },
  },
  methods: {
    toggleNav() {
      let nav = document.querySelector(".header");
      let body = document.querySelector("body");

      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        nav.classList.add("remove");
        body.classList.remove("no_scroll");
      } else {
        nav.classList.add("active");
        body.classList.add("no_scroll");
      }
    },

    goto(arg) {
      let body = document.querySelector("body");
      let nav = document.querySelector(".header");
      body.classList.remove("no_scroll");
      nav.classList.remove("active");
      document.getElementById(arg).scrollIntoView({ behavior: "smooth" });
    },
  },
});
</script>

<style scoped>
.close {
  display: none;
  position: relative;
}
.close img:first-of-type {
  width: 45px;
  height: 45px;
}
.close img:last-of-type {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

header.remove {
  animation: slideOut 1000ms ease-out forwards;
}
header.active {
  animation: slideIn 500ms ease-out forwards;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-250%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideOut {
  0% {
    opacity: 0;
    transform: translateX(-250);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@media (min-width: 850px) {
  .menu {
    display: none;
  }
}
@media (max-width: 1000px) {
  .navbar nav ul {
    gap: 1rem;
  }
}
@media (max-width: 850px) {
  nav ul {
    display: none;
  }

  header.active {
    border-radius: 8px;
    border: 0.5px solid rgba(255, 255, 255, 0.04);
    background: #150e28;
    backdrop-filter: blur(30px);
    height: 100vh;
    overflow: hidden;
    position: relative;
    animation: slideIn 500ms ease-out forwards;
  }

  header.active nav ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  header.active .logo {
    display: none;
  }
  header.active .navbar nav ul {
    gap: 2rem;
  }
  header.active .nav_item {
    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1px;
  }
  header.active .close {
    display: block;
  }
  header.active .menu {
    display: none;
  }
}
@media (max-width: 500px) {
  header.active .nav_item {
    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1px;
  }

  header.active nav ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translate(-5%, -50%);
  }

  .close img:first-of-type {
    width: 23px;
    height: 23px;
  }
  .close img:last-of-type {
    width: 11px;
    height: 11px;
  }
  .navbar nav ul {
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
