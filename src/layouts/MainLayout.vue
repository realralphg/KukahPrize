<template>
  <q-layout view="lHh Lpr lFf">
    <header
      :class="
        this.$router.currentRoute.value.name === 'home'
          ? 'header row justify-between items-center'
          : 'header rel row justify-between items-center'
      "
    >
      <div class="container">
        <div class="navbar">
          <div class="logo">
            <router-link to="/">
              <img src="../assets/logo.svg" alt="" />
            </router-link>
          </div>

          <nav>
            <ul>
              <li>
                <q-btn @click="goto('home')" class="nav_item" flat no-caps>
                  Home
                </q-btn>
              </li>
              <li>
                <q-btn @click="goto('intro')" class="nav_item" flat no-caps>
                  Introduction
                </q-btn>
              </li>
              <li>
                <q-btn @click="goto('winners')" class="nav_item" flat no-caps>
                  The winners
                </q-btn>
              </li>
              <li>
                <q-btn @click="goto('event')" class="nav_item" flat no-caps>
                  Event
                </q-btn>
              </li>
              <li>
                <q-btn @click="goto('gallery')" class="nav_item" flat no-caps>
                  Gallery
                </q-btn>
              </li>
              <li>
                <q-btn @click="goto('judges')" class="nav_item" flat no-caps>
                  Meet the Judges
                </q-btn>
              </li>
              <li class="partner">
                <q-btn class="nav_item" flat no-caps> Partner with us </q-btn>
              </li>
            </ul>
          </nav>

          <div>
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
          </div>
          <div class="resp_top">
            <div class="container">
              <div>
                <img src="../assets/logo.svg" alt="" />
              </div>
              <q-btn @click="toggleNav" flat no-caps class="close">
                <img src="../assets/cancel.svg" alt="" />
              </q-btn>
            </div>
          </div>
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

<style lang="scss" scoped>
.resp_top {
  display: none;
  position: absolute;
  padding: 1rem 0;
  top: 0%;
  left: 0;
  right: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: #1b3459;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:nth-child(1) {
      img {
        width: 150px;
      }
    }
  }
  // right: 5%;
}
li.partner {
  display: none;
  .q-btn {
    background: #1b3459 !important;
    color: #fff !important;
    padding: 0.5rem 1rem;
  }
}
.close img:first-of-type {
  width: 45px;
  height: 45px;
}
.close img:last-of-type {
  width: 52px;
  height: 52px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.menu img {
  width: 42px;
  height: 42px;
}

header.remove {
  animation: slideOut 1000ms ease-out forwards;
}
header.active {
  animation: slideIn 500ms ease-out forwards;
  z-index: 100;
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
@media (min-width: 950px) {
  .menu {
    display: none;
  }
}
@media (max-width: 1000px) {
  .navbar nav ul {
    gap: 1rem;
  }
}
@media (max-width: 950px) {
  nav ul {
    display: none;
  }
  li.partner {
    display: block;
  }

  .q-btn.contact {
    display: none;
  }

  header.active {
    border-radius: 8px;
    border: 0.5px solid rgba(255, 255, 255, 0.04);
    background: #150e28;
    background: #f0f2f4;

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
    gap: 1rem;
  }
  header.active .nav_item {
    color: #1b3459;
    font-size: 22px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1px;
  }
  header.active .resp_top {
    display: block;
  }
  header.active .menu {
    display: none;
  }
}
@media (max-width: 500px) {
  .contact {
    display: none;
    position: relative;
  }

  .logo img {
    width: 150px;
  }
  header.active .nav_item {
    font-size: 18px;
  }

  header.active nav ul {
    left: 30%;
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

  .close img:last-of-type {
    width: 32px;
    height: 32px;
  }

  .menu img {
    width: 32px;
    height: 32px;
  }
}
@media (max-width: 500px) {
  .logo img {
    width: 120px;
  }
}
</style>
