<template>
  <footer>
    <div class="container">
      <div class="footer_wrap">
        <div class="logo_area">
          <div class="logo">
            <img src="../assets/logo.svg" alt="" />
          </div>
          <p>Call: 08035356090</p>
          <p>Email: hello@thekukahprize.org</p>
          <p>Website: thekukahprize.org</p>

          <div class="btn_links">
            <a target="_blank" href="https://web.facebook.com/thekukahprize/"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/the-kukah-prize/"
            >
              <i class="fa-brands fa-linkedin-in"></i
            ></a>
            <a target="_blank" href="https://twitter.com/thekukahprize"
              ><i class="fa-brands fa-x-twitter"></i
            ></a>
          </div>
        </div>
        <div>
          <h3 class="">Company</h3>
          <ul>
            <li>
              <q-btn flat no-caps> Introduction </q-btn>
            </li>
            <li>
              <q-btn flat no-caps> The Icon </q-btn>
            </li>
            <li>
              <q-btn flat no-caps> The Winners </q-btn>
            </li>
            <li>
              <q-btn flat no-caps> Meet Judges </q-btn>
            </li>
            <li>
              <q-btn flat no-caps> Partner with us </q-btn>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="">FAQ</h3>
          <ul>
            <li>
              <q-btn flat no-caps> Press </q-btn>
            </li>
            <li>
              <q-btn flat no-caps> Technical suppirt </q-btn>
            </li>
            <li>
              <q-btn flat no-caps> For developers </q-btn>
            </li>
            <li>
              <q-btn flat no-caps> Newsletter </q-btn>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="">Join our Newsletter</h3>
          <ul>
            <li>Be the first to get notified on our new updates</li>
          </ul>

          <div class="input">
            <form>
              <input placeholder="Enter email here" type="text" />
              <q-btn no-caps no-wrap flat type="submit"> Subscribe now </q-btn>
            </form>
          </div>
        </div>
      </div>

      <div class="row terms_ justify-between items-center">
        <p>Copyright@GreysoftTechnologies,{{ new Date().getFullYear() }}</p>
        <p>Terms and conditions</p>
      </div>
    </div>

    <q-btn @click="goTop" flat no-caps class="goUp">
      <i class="fa-solid fa-arrow-up"></i
    ></q-btn>
  </footer>
</template>

<script setup>
const goTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style lang="scss" scoped></style>
