<template>
  <q-page class="">
    <section class="manzo">
      <div class="container">
        <div class="left text-left">
          <div class="img">
            <img src="../assets/icon.svg" alt="" />
          </div>
          <h3>
            Bishop Matthew <br />
            Hassan Kukah <br />
          </h3>
        </div>
      </div>

      <div class="clip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="125"
          viewBox="0 0 1512 125"
          fill="none"
        >
          <path
            d="M1540.18 0.152207L-0.776652 85.4345L-3.00023 156.4L1536 133.587L1540.18 0.152207Z"
            fill="#DCA236"
          />
        </svg>
      </div>
    </section>

    <div class="q-my-lg q-pt-xl container">
      <q-btn @click="router.go(-1)" flat no-wrap no-caps class="text-black">
        <span
          class="bg-secondary row justify-center items-center q-mr-md"
          style="width: 38.596px; height: 38.596px; border-radius: 50%"
        >
          <i class="fa-solid fa-arrow-left"></i
        ></span>
        Back
      </q-btn>
    </div>

    <section class="article container">
      <div>
        <img src="../assets/bish.png" alt="" />
      </div>

      <div>
        <p>
          Bishop Kukah’s humble background, his wide pastoral experience and
          networks across the country, have motivated his work in promoting
          stronger national unity through interfaith dialogue and promotion of
          economic and social justice for all citizens. As a result of his wide
          range of experience and exposure, he has often been referred to as a
          rabble-rouser for peace and nation-building in Nigeria. He seeks to
          leave a legacy for young Africans, one that will inspire and drive
          community development without boundaries, encouraging unity, democracy
          and freedom.
        </p>
      </div>

      <div>
        <p>
          Bishop Kukah is one of Nigeria’s foremost public intellectuals who has
          delivered numerous public lectures across Nigeria and worldwide, and
          written several books and hundreds of articles on various aspects of
          governance, faith, human rights and public policy in Nigeria. His
          contributions have added moral input, and shaped public policy and
          service. The bishop was responsible for the negotiation and end of the
          long-drawn-out conflict between Shell Petroleum Development
          Corporation and the people of Ogoniland in Rivers State, Nigeria.
        </p>
      </div>

      <div>
        <h3>
          Bishop Matthew <br />
          Hassan Kukah
        </h3>
      </div>
    </section>

    <section class="quotes">
      <div class="container">
        <div class="quote">
          <h3 class="h3">
            To make great ideas a reality, we must act, experiment, fail, adapt,
            and learn on a daily basis.
          </h3>
          <p class="bold">Jocelyn k. Glei.</p>
          <img src="../assets/quoteup.svg" alt="" />
          <img src="../assets/quotedown.svg" alt="" />
        </div>
      </div>
    </section>

    <partners-comp />
    <FooterCompVue />
  </q-page>
</template>

<script setup>
import FooterCompVue from "src/components/FooterComp.vue";
import PartnersComp from "src/components/PartnersComp.vue";
import { useRouter } from "vue-router";
let router = useRouter();
</script>

<style lang="scss" scoped>
.manzo {
  background: url("../assets/bish.png") no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: -5%;
  .container {
    padding-bottom: 0;
    border-bottom: 0;
    position: relative;
    z-index: 1;

    .left {
      .img {
        margin-bottom: 1rem;
        img {
          max-width: 300px;
        }
      }
      h3,
      h6 {
        color: white;
      }

      h3 {
        font-size: 35px;
        margin-bottom: 1rem;
      }
    }
  }

  .clip {
    position: absolute;
    z-index: 1;
    bottom: -5%;
    svg {
      display: block;
    }
  }
}
.manzo::before {
  content: "";
  position: absolute;
  background: rgba(27, 52, 89, 0.7);
  mix-blend-mode: multiply;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

section.quotes {
  padding: 190px 0;
}
section.article {
  display: grid;
  grid-template-areas:
    "img text1"
    "text2 text3";
  gap: 2rem;
  padding: 50px 0 100px;

  div:nth-child(1) {
    grid-area: img;
  }
  div:nth-child(2) {
    grid-area: text1;
  }
  div:nth-child(3) {
    grid-area: text2;
  }
  div:nth-child(4) {
    grid-area: text3;

    h3 {
      color: #1b3459;
      font-family: "munt", sans-serif;
      font-size: 30.28px;
      font-weight: 400;
      line-height: 201%; /* 84.624px */
    }
  }
  p {
    margin: 2rem 0;
    line-height: 2.5;
  }
}

@media (max-width: 800px) {
  .manzo {
    .clip {
      bottom: -7%;
    }
  }
}
@media (max-width: 500px) {
  section.intro {
    .maintext {
      font-size: 25px;
    }
  }
  .manzo {
    .container {
      .left {
        h3 {
          font-size: 25px;
        }
      }
    }

    .clip {
      bottom: -10%;
    }
  }
  section.article {
    grid-template-areas:
      "img"
      " text1"
      " text2"
      "text3 ";

    div:nth-child(4) {
      h3 {
        font-size: 20.28px;
      }
    }
  }
}
</style>
