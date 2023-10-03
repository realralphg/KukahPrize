<template>
  <q-page class="">
    <section id="home" class="hero">
      <div>
        <div>
          <h5 class="subtext">Young Africans Innovators Award</h5>
          <h1 class="maintext">
            the kukah prize for <br />
            young innovators
          </h1>
          <p class="paragraphText">
            An award of recognition for outstanding young Africans innovators
            <br />
            in the field of technology .
          </p>

          <div class="getstarted">
            <q-btn flat no-caps class="bg-secondary text-white">
              Get started
            </q-btn>
          </div>

          <div class="smallImgs">
            <img src="../assets/herosmall1.png" alt="" />
            <img src="../assets/herosmall2.png" alt="" />
            <img src="../assets/herosmall3.png" alt="" />
            <img src="../assets/herosmall4.png" alt="" />
          </div>
        </div>

        <div>
          <img src="../assets/heroframe.png" alt="" />
        </div>
      </div>

      <div class="centerimg">
        <img src="../assets/herocycle.png" alt="" />
      </div>
    </section>

    <section id="intro" class="intro container">
      <div class="text-center">
        <h2 class="maintext text-primary">
          <span data-reveal>introduction</span>
          <img src="../assets/introtext.svg" alt="" />
        </h2>
        <h5 data-reveal class="subtext">
          THE KUKAH PRIZE FOR YOUNG INNOVATORS
        </h5>
        <p data-reveal>
          An Award of recognition for outstanding innovators in the field of
          technology presented to young Africans who show exceptional promise as
          a developing leader in digital transformation. Bright young minds with
          creative and innovative solutions to developmental challenges both in
          their communities and the world at large are evaluated by judges in
          the startup and tech space across the continent for the most
          innovative digital solutions in the form of startups or initial
          concepts meeting global developmental challenges.
        </p>
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
    </section>

    <section class="icon">
      <div class="container">
        <div class="text-center">
          <h2 class="maintext text-white">
            The<span data-reveal class="text-secondary"> Icon </span
            ><img src="../assets/thisicon.svg" alt="" />
          </h2>
        </div>

        <div class="grid">
          <div class="left">
            <h3 data-reveal>
              Bishop Matthew <br />
              Hassan Kukah
            </h3>

            <p data-reveal>
              Bishop Kukah is one of Nigeria’s foremost public intellectuals who
              has delivered numerous public lectures across Nigeria and
              worldwide, written several books and hundreds of articles on
              various aspects of governance, faith, human rights and public
              policy in Nigeria. His contributions have added moral input,
              shaped public policy and service. The bishop was responsible for
              the negotiation and end of the long drawn out conflict between
              Shell Petroleum Development Corporation and the people of
              Ogoniland in Rivers State, Nigeria.
            </p>

            <q-btn :to="{ name: 'kukah' }" data-reveal flat no-wrap no-caps>
              Read more
              <span
                class="bg-secondary q-ml-md"
                style="width: 38.596px; height: 38.596px; border-radius: 50%"
                ><img src="../assets/arrow.svg" alt=""
              /></span>
            </q-btn>
          </div>
          <div class="right">
            <img data-reveal src="../assets/bish.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="quotes">
      <div class="container">
        <div class="quote">
          <h3 data-reveal class="h3">
            To make great ideas a reality, we must act, experiment, fail, adapt,
            and learn on a daily basis.
          </h3>
          <p class="bold">Jocelyn k. Glei.</p>
          <img data-reveal-right src="../assets/quoteup.svg" alt="" />
          <img data-reveal-left src="../assets/quotedown.svg" alt="" />
        </div>
      </div>
    </section>

    <section class="manzo">
      <div class="container">
        <div class="grid alt">
          <div class="left">
            <h3 data-reveal>Dr. Manzo Maigari <br /></h3>
            <h6 data-reveal class="text-secondary q-mb-md">
              (Chairman, Greysoft Technologies)
            </h6>

            <p data-reveal>
              The institution of this award that is done in collaboration with
              The Kukah Centre is a clear recognition of the national and global
              status of Bishop Matthew Hassan Kukah as not only a quintessential
              intellectual but a promoter of new modern trends in resolving the
              challenges of society through innovations. In partnership with The
              Kukah Centre, our company, Greysoft Technologies, has commenced
              the endowment of ‘The Kukah Prize for Young Innovators’ in order
              to celebrate outstanding innovative minds of Nigerian and African
              descent in the field of technology.
            </p>

            <q-btn :to="{ name: 'manzo' }" data-reveal flat no-wrap no-caps>
              Read more
              <span
                class="bg-secondary q-ml-md"
                style="width: 38.596px; height: 38.596px; border-radius: 50%"
                ><img src="../assets/arrow.svg" alt=""
              /></span>
            </q-btn>
          </div>
          <div class="right">
            <img data-reveal src="../assets/manzo.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section id="event" class="event">
      <div class="container">
        <div class="text-center">
          <h2 class="maintext text-white">
            The<span data-reveal class="text-secondary"> Event </span
            ><img src="../assets/theevent.svg" alt="" />
          </h2>
        </div>

        <div class="grid">
          <div class="left">
            <p data-reveal>
              Bishop Kukah is one of Nigeria’s foremost public intellectuals who
              has delivered numerous public lectures across Nigeria and
              worldwide, written several books and hundreds of articles on
              various aspects of governance, faith, human rights and public
              policy in Nigeria. His contributions have added moral input,
              shaped public policy and service. The bishop was responsible for
              the negotiation and end of the long drawn out conflict between
              Shell Petroleum Development Corporation and the people of
              Ogoniland in Rivers State, Nigeria.
            </p>
          </div>
          <div class="right">
            <img data-reveal src="../assets/kuk9.jpeg" alt="" />
          </div>
          <div class="div">
            <div class="one">
              <img data-reveal src="../assets/kuk8.jpeg" alt="" />
            </div>
            <div class="two">
              <img data-reveal src="../assets/kuk7.jpeg" alt="" />
            </div>
            <div class="three">
              <img data-reveal src="../assets/drmanzo.jpeg" alt="" />
            </div>
            <div class="four">
              <img data-reveal src="../assets/kuk1.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" class="gallery">
      <div class="container">
        <div class="text-center">
          <h2 class="maintext text-white">
            <span data-reveal class="text-primary"> Gallery </span
            ><img src="../assets/gallery.svg" alt="" />
          </h2>
        </div>
        <div data-reveal class="grid-wrapper">
          <div>
            <img src="../assets/kuk1.jpeg" alt="" />
          </div>
          <div>
            <img src="../assets/kuk2.jpeg" alt="" />
          </div>
          <div class="tall">
            <img src="../assets/kuk8.jpeg" alt="" />
          </div>
          <div class="wide">
            <img src="../assets/gmid.png" alt="" />
          </div>
          <div>
            <img src="../assets/kuk8.jpeg" alt="" />
          </div>
          <div class="tall">
            <img src="../assets/kuk1.jpeg" alt="" />
          </div>
          <div class="">
            <img src="../assets/gmid1.png" alt="" />
          </div>
          <div>
            <img src="/images/win1.jpeg" alt="" />
          </div>
          <div class="wide">
            <img src="../assets/kuk7.jpeg" alt="" />
          </div>
          <div class="big">
            <img src="../assets/kuk3.jpeg" alt="" />
          </div>
          <div class="tall">
            <img src="../assets/drmanzo.jpeg" alt="" />
          </div>
          <div>
            <img src="../assets/kuk9.jpeg" alt="" />
          </div>
          <div>
            <img src="../assets/kuk10.jpeg" alt="" />
          </div>

          <div>
            <q-btn flat no-wrap no-caps>
              Read more
              <span
                class="bg-secondary q-ml-md"
                style="width: 38.596px; height: 38.596px; border-radius: 50%"
                ><img src="../assets/arrow.svg" alt=""
              /></span>
            </q-btn>
          </div>
        </div>
      </div>
    </section>

    <section class="press">
      <div class="container">
        <div class="text-center">
          <h2 class="maintext text-primary">
            <span>Press</span
            ><span data-reveal class="text-primary"> Interview </span
            ><img src="../assets/press.svg" alt="" />
          </h2>
        </div>

        <div class="grid alt">
          <div class="left">
            <div data-reveal>
              <h3>Isah Raphael</h3>
            </div>
            <h6>(Chairman, Greysoft Technologies)</h6>

            <h5 data-reveal>
              What is the essence of the Kukah Prize sponsored by Greysoft
              Technologies in collaboration with The Kukah Centre?
            </h5>

            <p data-reveal>
              The Kukah Prize for Young Innovators is intended to support and
              spur young and innovative Africans whose ideas embody the
              potential to transform their communities and the world around us.
              It is an award of recognition for outstanding innovators in the
              field of technology presented to young Africans who show
              exceptional promise as developing leaders in digital
              transformation.
            </p>

            <q-btn @click="ralphsModal = true" data-reveal flat no-wrap no-caps>
              Continue
              <span
                class="bg-secondary q-ml-md"
                style="width: 38.596px; height: 38.596px; border-radius: 50%"
                ><img src="../assets/arrow.svg" alt=""
              /></span>
            </q-btn>
          </div>
          <div class="right">
            <img src="../assets/ralph.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="quotes tw">
      <div class="container">
        <div class="quote">
          <h3 data-reveal class="h3">
            To sit on an idea or fail to act on a goal is not really
            goal-setting, but wishful thinking.
          </h3>
          <p class="bold">Les Brown</p>
          <img data-reveal src="../assets/quoteup.svg" alt="" />
          <img data-reveal src="../assets/quotedown.svg" alt="" />
        </div>
      </div>
    </section>
    <section id="winners" class="winners">
      <div class="container">
        <div class="text-center">
          <h2 class="maintext text-white">
            The<span data-reveal class="text-secondary"> Winner </span
            ><img src="../assets/thewinner.svg" alt="" />
          </h2>

          <p class="text-center text-white">
            After weeks of rigorous evaluation of entries, three winners emerged
            <br />
            on the 31st day of August 2022 to become the Winners of the Maiden
            <br />
            Edition of the Kukah Prize for Young Innovators.
          </p>

          <div class="winners_nav">
            <nav data-reveal>
              <ul>
                <li>
                  <q-btn class="active" flat no-wrap no-caps>2023</q-btn>
                </li>
                <li>
                  <q-btn flat no-wrap no-caps>2024</q-btn>
                </li>
                <li>
                  <q-btn flat no-wrap no-caps>2025</q-btn>
                </li>
                <li>
                  <q-btn flat no-wrap no-caps>2026</q-btn>
                </li>
                <li>
                  <q-btn flat no-wrap no-caps>2027</q-btn>
                </li>
                <li>
                  <q-btn flat no-wrap no-caps>2028</q-btn>
                </li>
                <li>
                  <q-btn flat no-wrap no-caps>2029</q-btn>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="grid">
          <div
            v-for="(winner, index) in winners"
            :key="index"
            style="gap: 1rem"
            :class="
              winner.name ===
              'Johnson Jaiyeola, with Paul Jaiyeola & Oreoluwa Adetoro'
                ? 'winner'
                : 'winner row items-center no-wrap'
            "
          >
            <div>
              <img data-reveal :src="`/images/${winner.img}`" alt="" />
              <p class="placeText">{{ winner.placement }}</p>
            </div>
            <div>
              <h5 class="paragraphText text-white">{{ winner.name }}</h5>

              <p data-reveal class="paragraphsmallText text-white">
                {{ winner.position }}
              </p>

              <q-btn
                @click="toggleWinner(winner)"
                data-reveal
                flat
                no-wrap
                no-caps
              >
                Read more
                <span
                  class="bg-secondary q-ml-md"
                  style="width: 38.596px; height: 38.596px; border-radius: 50%"
                  ><img src="../assets/arrow.svg" alt=""
                /></span>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="press honorary">
      <div class="container">
        <div class="text-center">
          <h2 class="maintext text-center text-primary">
            <span data-reveal class="text-primary text-center">
              Honorary <br />
              award of recognition </span
            ><img src="../assets/recog.svg" alt="" />
          </h2>
        </div>

        <div class="grid">
          <div class="left">
            <div data-reveal>
              <h3>Dr. Jude Onwudili</h3>
            </div>
            <h6 data-reveal>
              (Senior Lecturer in Chemical Engineering, Aston University, UK)
            </h6>

            <h5 data-reveal>
              Category: Innovative Services to the Advancement of Technology
              Transfer to Developing Countries
            </h5>

            <p data-reveal>
              Dr Jude Onwudili is a Senior Lecturer in Chemical Engineering at
              the Department of Chemical Engineering & Applied Chemistry, School
              of Infrastructure and Sustainable Engineering, within the College
              of Engineering and Physical Sciences, Aston University,
              Birmingham, United Kingdom.
            </p>

            <q-btn @click="judesModal = true" data-reveal flat no-wrap no-caps>
              Continue
              <span
                class="bg-secondary q-ml-md"
                style="width: 38.596px; height: 38.596px; border-radius: 50%"
                ><img src="../assets/arrow.svg" alt=""
              /></span>
            </q-btn>
          </div>
          <div class="right">
            <img src="../assets/jude.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="quotes tw">
      <div class="container">
        <div class="quote">
          <h3 data-reveal class="h3">
            Get a good idea and stay with it. Do it, and work at it until it's
            done right.
          </h3>
          <p class="bold">Walt Disney</p>
          <img data-reveal src="../assets/quoteup.svg" alt="" />
          <img data-reveal src="../assets/quotedown.svg" alt="" />
        </div>
      </div>
    </section>

    <section class="event centre">
      <div class="container">
        <div class="text-center">
          <h2 class="maintext text-white">
            The<span data-reveal class="text-secondary"> Kukah Centre </span
            ><img src="../assets/centretext.svg" alt="" />
          </h2>
        </div>

        <div class="grid">
          <div class="left">
            <p data-reveal>
              The Kukah Centre (TKC) is a Nigeria-based policy research
              institute, founded by Most Rev. Matthew Hassan Kukah, Bishop of
              the Catholic Diocese of Sokoto. The Centre has offices in Abuja
              and Kaduna and treats political leadership as a collaborative
              exercise that requires multiple governance structures at various
              levels – individuals, households, small businesses, the organized
              private sector, NGOs and government.
            </p>
            <p>
              Interfaith dialogue is at the core of the Centre’s work and
              involves actively promoting conversations among Nigeria’s faith
              communities, as well as between leaders in faith and public
              policy. The Kukah Centre aspires to become Nigeria’s leading
              institution for the promotion of an active and engaged citizenry
              by providing support for inclusive dialogue and advocacy
              initiatives.
            </p>
          </div>
          <div class="right">
            <img src="../assets/centre1.png" alt="" />
          </div>
          <div class="div">
            <div class="one">
              <img src="../assets/centre2.png" alt="" />
            </div>
            <div class="two">
              <img src="../assets/centre3.png" alt="" />
            </div>
            <div class="three">
              <img src="../assets/centre3.png" alt="" />
            </div>
            <div class="four">
              <img src="../assets/centre2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="event started">
      <div class="container">
        <div class="text-center">
          <h2 class="maintext text-white">
            Get<span data-reveal class="text-secondary"> Started </span
            ><img src="../assets/getstarted.svg" alt="" />
          </h2>
        </div>

        <div class="lists">
          <h4 data-reveal>
            TO PARTICIPATE, CANDIDATES WERE REQUIRED TO SATISFY THE FOLLOWING
            REQUIREMENTS:
          </h4>
          <div class="grid">
            <div class="">
              <ul>
                <li
                  data-reveal
                  style="gap: 1rem"
                  class="row no-wrap items-start"
                >
                  <img src="../assets/list.svg" alt="" />
                  <p>
                    Candidates shall not have reached their 31st birthday by the
                    time the award is received.
                  </p>
                </li>
                <li
                  data-reveal
                  style="gap: 1rem"
                  class="row no-wrap items-start"
                >
                  <img src="../assets/list.svg" alt="" />
                  <p>
                    Candidates must be African, although the maiden edition is
                    focused on Nigeria.
                  </p>
                </li>
                <li
                  data-reveal
                  style="gap: 1rem"
                  class="row no-wrap items-start"
                >
                  <img src="../assets/list.svg" alt="" />
                  <p>
                    The award will be presented to an individual whose
                    innovative work demonstrates high levels of excellence in
                    technology.
                  </p>
                </li>
              </ul>
            </div>
            <div class="">
              <ul>
                <li
                  data-reveal
                  style="gap: 1rem"
                  class="row no-wrap items-start"
                >
                  <img src="../assets/list.svg" alt="" />
                  <p>
                    The award winner will be selected based on the candidate's
                    research's outstanding quality, novelty, and significance.
                  </p>
                </li>
                <li
                  data-reveal
                  style="gap: 1rem"
                  class="row no-wrap items-start"
                >
                  <img src="../assets/list.svg" alt="" />
                  <p>
                    Solution must address at least one of the Sustainable
                    Development Goals (SDGs) to ensure that the solution is
                    targeting a real problem.
                  </p>
                </li>
                <li
                  data-reveal
                  style="gap: 1rem"
                  class="row no-wrap items-start"
                >
                  <img src="../assets/list.svg" alt="" />
                  <p>Solution must be useful.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="judges" class="meet">
      <div class="container">
        <div class="text-center">
          <h2 class="maintext text-white">
            Meet the<span data-reveal class="text-secondary"> judges </span
            ><img src="../assets/meet.svg" alt="" />
          </h2>

          <p data-reveal class="q-mb-xl">
            The evaluation and scrutiny of entries for The Kukah Prize for Young
            Innovators was presided <br />
            by a team of highly qualified and competent jurors from various
            relevant fields of endeavours.
          </p>
        </div>

        <div class="cards">
          <Splide :options="options" aria-label="Judges">
            <SplideSlide
              data-reveal
              v-for="(judge, index) in judges"
              :key="index"
            >
              <div class="card_top">
                <img :src="`/images/${judge.img}`" alt="" />
                <img src="../assets/angle.svg" alt="" />
              </div>
              <div>
                <h4 class="name">{{ judge.name }}</h4>
                <p>{{ judge.role }}</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
    <partners-comp />
    <section class="quotes partnerships">
      <div class="container">
        <div class="quote">
          <h3 data-reveal class="h3">
            Partnerships are good engines for narrative
          </h3>
          <p class="bold">Tommy Lee Jones</p>
          <img data-reveal src="../assets/quoteup.svg" alt="" />
          <img data-reveal src="../assets/quotedown.svg" alt="" />
        </div>
      </div>
    </section>
    <section class="event vr">
      <div class="container">
        <div class="lists">
          <div class="grid">
            <div class="">
              <img src="../assets/vr.png" alt="" />
            </div>
            <div class="">
              <h6 data-reveal>
                Tap Into The Potentials of a
                <strong>$5,000,000,000,000,</strong>
                RalphsModal INDUSTRY
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterCompVue data-reveal />

    <q-dialog class="dialog" v-model="ralphsModal">
      <q-card class="dialog_card" style="position: relative">
        <ralphs-modal :data="ralphsData" />

        <q-btn
          flat
          @click="ralphsModal = false"
          no-wrap
          no-caps
          style="position: absolute; top: 1%; right: 1%"
        >
          <i style="font-size: 1.5rem" class="fa-solid fa-xmark"></i>
        </q-btn>
      </q-card>
    </q-dialog>
    <q-dialog class="dialog" v-model="judesModal">
      <q-card class="dialog_card bg-primary" style="position: relative">
        <ralphs-modal :data="drJude" />

        <q-btn
          flat
          @click="judesModal = false"
          no-wrap
          no-caps
          style="position: absolute; top: 1%; right: 1%"
        >
          <i style="font-size: 1.5rem" class="fa-solid text-white fa-xmark"></i>
        </q-btn>
      </q-card>
    </q-dialog>
    <q-dialog class="dialog" v-model="winnersModal">
      <q-card class="dialog_card" style="position: relative">
        <WinnersComp :data="winnerObj" />

        <q-btn
          flat
          @click="winnersModal = false"
          no-wrap
          no-caps
          style="position: absolute; top: 1%; right: 1%"
        >
          <i style="font-size: 1.5rem" class="fa-solid fa-xmark"></i>
        </q-btn>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import FooterCompVue from "src/components/FooterComp.vue";
import PartnersComp from "src/components/PartnersComp.vue";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import RalphsModal from "src/components/RalphsModal.vue";
import WinnersComp from "src/components/WinnersComp.vue";
let ralphsModal = ref(false);
let judesModal = ref(false);
let winnersModal = ref(false);
let winnerObj = ref({});
let options = ref({
  rewind: true,
  gap: 30,
  pagination: false,
  type: "loop",
  arrows: true,
  perPage: 3,
  breakpoints: {
    640: {
      perPage: 1,
      gap: 20,
    },
    1000: {
      perPage: 2,
    },
    1454: {
      perPage: 3,
    },
    2000: {
      perPage: 3,
    },
  },
});
let judges = ref([
  {
    name: "Mercy Markus",
    role: "Software Engineer on Microsoft's Mixed Reality Team.",
    img: "judge1.png",
  },
  {
    name: "Aramide Abe",
    role: "Executive Director, Naija Startups",
    img: "judge2.png",
  },
  {
    name: "Abubakar Nur Khalil",
    role: "CEO & CTO at Recursive Capital.",
    img: "judge3.png",
  },
  {
    name: "Obi Brown",
    role: "Founder of JuniorX Innovation Academy.",
    img: "judge4.png",
  },
]);
let ralphsData = ref({
  img: "/assets/ralph.png",
  name: "Isah Raphael",
  position: "(Chairman, Greysoft Technologies)",
  dialog: {
    ques: "What is the essence of the Kukah Prize sponsored by Greysoft Technologies in collaboration with The Kukah Centre?",
    ans: "The Kukah Prize for Young Innovators is intended to support and spur young and innovative Africans whose ideas embody the potential to transform their communities and the world around us. It is an award of recognition for outstanding innovators in the field of technology presented to young Africans who show exceptional promise as developing leaders in digital transformation. In collaboration with The Kukah Center, Greysoft Technologies has instituted the Kukah Prize, like the Nobel Prize, in honor of a living legend, Bishop Matthew Hassan Kukah of the Catholic Diocese of Sokoto, Nigeria, who is a tireless advocate for justice, democracy, and human development. In this modern age, nothing can quite enable a rapid and inclusive development across regions, ethnicities, and religion like technology, which by the way, is inherent in all sectors. The erudite bishop wishes to leave a legacy for young Africans with innovative ideas capable of transforming the African continent from the darkness it is in, into what we know it has the potential to become. Besides the prize, winners of this award will have access to partners like Microsoft ADC to refine them into global brands. Even though the maiden edition had focused on Nigeria, subsequent entries for the award will traverse the entire African continent. Africa faces a unique challenge which is not peculiar to Nigeria alone. With proper recognition, network and support, leaders of global industries can emerge out of Africa and right there, is the goal!",
  },
  dialog2: {
    ques: "Can you give us highlights on what your company is doing right now?",
    ans: "Greysoft does just one thing! “Increasing access to digital opportunities across the continent”, which is our goal, we do things by “helping people leverage technology for improved livelihood”. Therefore everything you see happen at Greysoft takes root from this vision. In the last few years, we have focused on improving digital literacy across Northern Nigeria, getting our teeming youth ready for the jobs of tomorrow. The world we live in is ever changing so rapidly, opportunities are numerous and evolving but the required skills set to match these opportunities is lacking, especially in Northern Nigeria. The southern part of the country is ahead of this curve, but this does not exclude them from our equation. We believe that with the right partnerships, we can create a strong advocacy on the need for a rapid increase in digital literacy so that our people can be ready for these available jobs as they come. With technology, the world today is a global village, meaning we can reach every part of it with a click. Technology itself is a universal language and an enabler, which means it is present in every area of work; engineering, agriculture, fashion, education, government etc. The opportunities that abound as a result of embracing technology cannot be exhausted. Some of our trainees are fully employed, working remotely for clients overseas and are paid 10-20 times what their peers are paid locally. As stakeholders, Greysoft has recently partnered with the Skills for Prosperity Initiative on the National Apprenticeship and Traineeship System (NATS) which is a UKaid funded program, in partnership with the Industrial Training Fund (ITF), National Board for Technical Education (NBTE), the Kaduna State Government and the Lagos State Employment Trust Fund (LSETF). The framework we have developed will enable apprentices to acquire NSQ certifications that are recognised nationally according to the level of knowledge they have acquired. This framework establishes mechanisms for institutionalizing apprenticeship and traineeship systems in Nigeria and the promotion of synergies and collaboration therefrom. Thereby, empowering governments, employers, training providers and learners with common governance structure to ensure best ways of working. Interestingly, as we focus on solving grass root problems, we have kept an eye on the future. The Virtual or Extended Reality space (VR/XR) has created a whole new world called the metaverse, an alternate universe which is forecasted by McKenzie business report to hit a $5trillion mark by 2030. Greysoft has taken the lead in this space to help public and private companies gain more visibility through virtual tourism for properties in real estates, virtual showrooms for automobiles, virtual tourism for museums, schools and government facilities. Our recent XR Labs (Extended Reality Labs) for Education enables teachers and students to explore the human anatomy in an immersive way as never before seen. Students can virtually remove organs from a virtual representation of a human being and analyze it, students can also unplug all joints of the human skeletal system and interact with them and learn to fix them back together where they belong, interact chemical compounds in the periodic table, take tests in a virtual world in such an immersive engaging manner that makes learning enjoyable and memorable. Students can also go on virtual excursions to visit places across the world in history from their classrooms or labs. So from where we are, we are already changing the world, piece by piece! How has been the reaction of younger minds to embrace modern innovations? Enthusiastic! That’s the one word. The enthusiasm is noteworthy. At Greysoft, we are community driven and the young folks are at the center of all we do, which is why we have tailored our programs, bootcamps and meetups to appeal to their style. As we know, the African population is a youthful one. The youth account for 70 per cent of over 200 million people in Nigeria which is a sixth of the continent’s inhabitants. Time and vigor is abundant in youth and these are the attributes that are required for a change agent. The abundance of time to learn new ways and the strength to put what is learnt into practice.",
  },
});
let drJude = ref({
  img: "/assets/jude.png",
  name: "Dr. Jude Onwudili",
  position: "(Senior Lecturer in Chemical Engineering, Aston University, UK)",
  category:
    "Category: Innovative Services to the Advancement of Technology Transfer ping Countries",
  text1:
    "Dr Jude Onwudili is a Senior Lecturer in Chemical Engineering at the Department of Chemical Engineering & Applied Chemistry, School of Infrastructure and Sustainable Engineering, within the College of Engineering and Physical Sciences, Aston University, Birmingham, United Kingdom. He was born and raised in Nigeria, where he graduated with a first-class honours degree from the University of Ibadan. In 2002, he won a full scholarship under the US-based Ford Foundation International Fellowships programme to pursue his doctoral degree in Chemical and Process Engineering at the University of Leeds, UK. He completed and submitted his PhD thesis in under 3 years and went on to pass his PhD viva voce (examination), achieving a rare “pass with no corrections” remark from the external examiner. As an academic, Dr Onwudili teaches chemical process design and renewable technologies.",
  text2:
    "His extensive research expertise, spanning over 15 years, focuses mostly on thermo-chemical and thermo-catalytic processing of biomass and organic wastes to produce fuels, chemicals and materials. During this time, he has supervised and co-supervised 13 PhDs, who successfully completed their studies. So far, he has published over 110 academic papers and his work has been cited over 4300 times, with a citation index (h-index) of 38, placing him among the most active researchers in his field across the world. He currently leads the Sustainable Fuels and Chemicals Team at the Energy and Bioproducts Research Institute (EBRI), Aston University, with 3 PhDs and 3 postdoctoral researchers. Dr. Onwudili has recently filed a patent for his novel research on hydrocarbon solvent-assisted catalytic upgrading of pyrolysis bio-oils from sustainable biomass feedstocks such as agricultural wastes, forestry residues and municipal solid wastes, to produce green kerosene and green diesel fuels. In addition, this innovation formed the basis of a recent successful £5 million Innovate UK grant award that involved four Nigerian-based companies and three others from the UK, Kenya and Italy to bring a new hydrocarbon biofuel technology to Nigeria and sub-Saharan Africa.",
});

let winners = ref([
  {
    img: "win1.jpeg",
    video_link: "https://www.youtube.com/embed/kMDbBc7rMZ8?si=tkhLc2ns_azncbUu",
    placement: "1st place",
    name: "Esther Olalude",
    name1: "Esther Olalude (Age 20)",
    position:
      "1st Place,Kukah Prize for Young Innovators (2022) (Age 20) Founder, Venille Sanitary Pads",
    desc: [
      "Period poverty has become a major challenge among women and girls in Africa. In Nigeria about 37% of menstruating women and girls do not have sanitary hygiene products. This problem impacts the good health and wellbeing of women (SDG3). This is the problem we are addressing. We are manufacturing affordable sanitary pads which are 30% cheaper than conventional pads. This helps combat “period poverty”, especially in Africa. Thus, contributing to SDG 3, Good health and wellbeing. By developing a cheaper and very Eco-friendly sanitary pad product that will replace conventional pads, our business is taking into consideration one of the major issues facing women and girls in this region. Which is “period poverty”. Our pad has made it possible for thousands of women in our region to be able to afford pads. And in using them, they will be adding very little, if any, plastic to our environment, pointing to the environmental impact of our product. As a feminine hygiene product company, we are centered 100% on women and girls. Our goal by 2025 is to scale to other regions of our country and have a workforce comprising 80% of women and girls in our company's managerial, administration, production, and sales positions. We offer women and girls several opportunities as employees, target audiences for our sensitization and educative campaigns, users, customers, and also as partners. In this research and piloting phase, we have engaged women and girls and we plan to hire more as we progress. ",
      "The Venille sanitary pad is Eco-friendly and low-cost. Like conventional commercial pads, our pad has three parts. But the top sheet of our pad is made of banana fibre, a very abundant plant product that is an ideal substitute for polypropylene used in conventional pads. This is due to its natural antibacterial, soft and breathable nature. Our absorbent core (middle sheet), is made from bamboo fibre which has been scientifically proven to absorb water 3-4 times more than cotton-which is one of the world’s most pesticide-sprayed crops. The pad's barrier sheet (bottom sheet) is made with bioplastic from starch and is 100% biodegradable. Our pads are made so that users can return the packaging for cash exchange.Our idea has both social and environmental impact potential. The Vanille sanitary pad is an environmentally friendly product that biodegrades completely in 6 months, reducing pollution caused by sanitary pads which contain plastic. As a feminine hygiene product company, we are centred almost 100% on women and girls. Our goal by 2025 is to have scaled our women empowerment program to other regions of our country and have a workforce that comprises 80% of women in the managerial, administration, production, and sales positions of our company. We plan to go into partnership and empower more women banana farmers in our rural communities.",
    ],
  },
  {
    img: "win2.png",
    video_link: "https://www.youtube.com/embed/kMDbBc7rMZ8?si=tkhLc2ns_azncbUu",
    placement: "2nd place",
    name: "Rebecca Adeosun",
    name1: "Rebecca Adeosun (Age 26)",
    position:
      "2nd Place, Kukah Prize for Young Innovators (2022) (Age 26) Founder, Ocycle",
    desc: [
      "Bio-Wastes from households and livestock farms usually find their way into drainage channels, causing environmental pollution and landfills which further contribute to global warming. OCycle is solving these problems through the use of digital and biotechnology. Our waste pickup portal on our digital platform (www.ocycle.com.ng) allows users to trade in organic waste for rewards. The recovered Organic waste is then up-cycled through a series of processes that transforms these wastes into value-added products that may later be used as Bio feed for livestock, Bio-fertilizer for food crops and Biofuel for heat creation processes. Unlike other competitors, at Ocycle, we are taking advantage of Bio-wastes by creating not just one, but multiple value-added products from different stages of the organic cycle of bio-wastes, one of which (the Bio-Gas) helps to reduce the production costs of others. This, therefore, leaves us with the (best price) in the market. The direct beneficiaries of our idea would be Livestock Farmers making use of our Black Soldier Fly products, Crop Farmers who rely on our bio-fertilizer products, and Industries in need of our biofuel products.",
    ],
  },

  {
    img: "win1.png",
    video_link: "https://www.youtube.com/embed/kMDbBc7rMZ8?si=tkhLc2ns_azncbUu",
    placement: "3rd place",
    name: "Johnson Jaiyeola, with Paul Jaiyeola & Oreoluwa Adetoro",
    name1: "Johnson Jaiyeola(Age 21), with Paul Jaiyeola & Oreoluwa Adetoro ",
    position:
      "3rd Place, Kukah Prize for Young Innovators (2022) (Age 21) Co-Founders, Helgg Scooters.",
    desc: [
      "We are solving the effects of CO2 emissions caused by numerous vehicles in cities and the inconvenience and lack of flexibility of public transportation systems. Introducing a fleet of shared electric vehicles into different African communities, connected via a mobile App. All users have to do is SCAN, PAY, and RIDE to their various destinations and park properly for the next users. We leverage IoT technology to create an efficient sharing system in different communities, where each E-vehicle belongs to every individual in the community. Using the Mobile App, users can locate the nearest E-vehicle to them, Scan the QR code on the vehicle, ride to their destination, and park properly for other users Universities and Estates in Africa are the major targets of this innovation. Where occupants need to make short to medium trips and may not be able to afford a vehicle, or using a vehicle will be a waste of resources, and walking may be strenuous, this sharing system provides the last mile solution to residents of these areas, as they spend less and do not have to walk strenuous journeys.",
    ],
  },
]);

const toggleWinner = (winner) => {
  winnerObj.value = winner;
  winnersModal.value = true;
};

onMounted(() => {
  let tl = gsap.timeline({ delay: 1 });
  tl.from("header", {
    duration: 0.6,
    delay: 1.45,
    ease: "power2. out",
    y: -60,
  });
  tl.from(".subtext", {
    duration: 0.6,
    ease: "power2. out",
    opacity: 0,
    y: -40,
  });
  tl.from(".maintext", {
    duration: 0.8,
    ease: "power2. out",
    opacity: 0,
    // delay: 1.,
    y: -40,
  });
  tl.from(".paragraphText", {
    duration: 1,
    ease: "power2. out",
    opacity: 0,
    y: -40,
  });
  tl.from(".getstarted", {
    duration: 1.2,
    ease: "power2. out",
    opacity: 0,
    y: -40,
  });
  document.querySelectorAll(".smallImgs img").forEach((image, index) => {
    // console.log(image);
    tl.from(image, {
      duration: index === 0 ? 1 * 0.4 : index * 0.4,
      ease: "power2. out",
      opacity: 0,
      x: -40,
    });
  });

  /**
   * SCROLL REVEAL
   */

  const revealElements = document.querySelectorAll("[data-reveal]");

  const scrollReveal = function () {
    for (let i = 0; i < revealElements.length; i++) {
      const elementIsInScreen =
        revealElements[i].getBoundingClientRect().top <
        window.innerHeight / 1.15;

      if (elementIsInScreen) {
        revealElements[i].classList.add("revealed");
      } else {
        revealElements[i].classList.remove("revealed");
      }
    }
  };

  window.addEventListener("scroll", scrollReveal);

  scrollReveal();
});
</script>

<style scoped>
.dialog_card {
  background: #f0f2f4;
  padding: 1rem;
  overflow-x: hidden;
}

.dialog_card::-webkit-scrollbar {
  width: 4px;
}

@media (min-width: 1000px) {
  .dialog_card {
    width: 80%;
    padding: 2rem;
  }
}
</style>
