<template>
  <q-page class="">
    <section class="manzo">
      <div class="container">
        <div class="left text-center">
          <h3>Dr. Manzo Maigari <br /></h3>
          <h6 class="text-white q-mb-md">(Chairman, Greysoft Technologies)</h6>
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
        <img src="../assets/manzo.png" alt="" />
      </div>

      <div>
        <p>
          The institution of this award that is done in collaboration with The
          Kukah Centre is a clear recognition of the national and global status
          of Bishop Matthew Hassan Kukah as not only a quintessential
          intellectual but a promoter of new modern trends in resolving the
          challenges of society through innovations. <br />
          In partnership with The Kukah Centre, our company, Greysoft
          Technologies, has commenced the endowment of ‘The Kukah Prize for
          Young Innovators’ in order to celebrate outstanding innovative minds
          of Nigerian and African descent in the field of technology. The
          conferment of the award in the name of Bishop Kukah is in clear
          acknowledgement of the sterling efforts deployed by the erudite
          Catholic Bishop of Sokoto Diocese in encouraging younger generations
          to rise up and embrace modern innovation through the use of
          technologies for development.
        </p>
      </div>

      <div>
        <p>
          In awarding this prize, we are recognising the inspiring role played
          by the Bishop in advancing and encouraging youths to rise up and
          realise their manifest destiny in various human endeavours. Apart from
          spearheading moves in identifying with modern trends in digital
          transformation; Bishop Kukah remains a symbol of fearlessness in
          advocating for freedom and democratic rights.
        </p>

        <p>
          There’s no doubt that the mass of African youths are burdened with the
          task of surviving hard times brought by underdevelopment and other
          challenges confronting the continent. Amidst declining living
          standards caused by monumental crises, this award attempts to honour
          exceptionally brilliant young minds dedicated to the development of
          their countries in resolving their immediate problems.
        </p>

        <p>
          Our youths are still trapped in the backwaters of a forlorn hope, but
          we also accept the fact that the youthful spirit of standing beyond
          the boundaries of despair holds the promise for a new day in Africa.
          Recognizing these talents that are determined to change the story of
          Africa has the capacity to inspire and encourage others to embark on
          the journey of making a difference for the improvement of humanity.
        </p>

        <p>
          If we ever hope to join other parts of the world engaged in the
          deployment of the Knowledge Economy for the advancement of Africa, we
          must encourage and reward young Africans who have demonstrated
          exceptional skills for digital transformation. We must also stay the
          course in inspiring bright young minds whose creative technological
          solutions have the potential to bring about positive growth in our
          communities and in the wider world.
        </p>
      </div>

      <div>
        <p>
          We recently closed nominations for the award, and now entries are
          being evaluated by judges in the startup and tech space across the
          continent for the most innovative digital solutions in the form of
          startups or initial concepts meeting global developmental challenges.
          The selection criteria included that the candidates shall not have
          reached their 31st birthday by the time the award is received;
          candidates must be African, even though this maiden edition is limited
          to Nigeria, subsequent ones will encompass Africa; the award will be
          presented to individuals whose innovative work demonstrates high
          levels of excellence in technology, and the award winner will be
          selected on the basis of the outstanding quality, novelty and
          significance of the candidate’s research.
        </p>

        <p>
          Finally, we are open to partners and sponsors as we do not aim to
          build this legacy alone. Today we have “Microsoft Africa Development
          Center” as partners and a few other brands. Collaboration is necessary
          if we must build a lasting and sustainable system.
        </p>
        <p>
          In absolute recognition of Halford Luccock's words that “No one can
          whistle a symphony, it takes an orchestra to play it”, let us join
          hands in honouring the Bishop whose works have assisted in advancing
          the cause of humanity.
        </p>

        <h3>Dr. Manzo Maigari</h3>
      </div>
    </section>

    <section class="intro">
      <div class="container">
        <div class="text-center">
          <h2 class="maintext text-primary">
            <span>
              Centre Unveils Award To Mark <br />
              Bishop Kukah's 70TH Birthday</span
            >
          </h2>
        </div>

        <div class="video_area">
          <iframe
            width="100%"
            height="415"
            src="https://www.youtube.com/embed/l4bDjU-48lE?si=gES7V7GDufU1gjPw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
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
  background: url("../assets/manzo.png") no-repeat;
  position: relative;
  background-size: cover;
  background-position: 80% 15%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -5%;
  .container {
    padding-bottom: 0;
    border-bottom: 0;
    position: relative;
    z-index: 1;

    .left {
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
    bottom: -4%;
    width: 100%;
    left: 0;
    svg {
      width: 100%;
      display: block;
    }
  }
}
.manzo::before {
  content: "";
  position: absolute;
  background: rgba(27, 52, 89, 0.78);
  mix-blend-mode: multiply;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

section.intro {
  background: #1b3459;
  padding: 5rem 0;

  .container {
    width: 80%;
  }

  .maintext {
    text-align: left;
    font-weight: 400;
    font-size: 35px;
    line-height: 1.3;
    font-family: "customRegular", sans-serif;
    span {
      color: white;
    }
  }

  .video_area {
    width: 100%;
  }
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
      bottom: -6%;
    }
  }
}
@media (max-width: 780px) {
  .manzo {
    .clip {
      bottom: -5%;
    }
  }
}
@media (max-width: 600px) {
  .manzo {
    .clip {
      bottom: -6%;
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

@media (max-width: 400px) {
  .manzo {
    .clip {
      bottom: -7%;
    }
  }
}
@media (max-width: 380px) {
  .manzo {
    .clip {
      bottom: -9%;
    }
  }
}
@media (max-width: 370px) {
  .manzo {
    .clip {
      bottom: -8%;
    }
  }
}
@media (max-width: 300px) {
  .manzo {
    .clip {
      bottom: -9%;
    }
  }
}
</style>
