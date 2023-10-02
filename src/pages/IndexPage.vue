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
            <img data-reveal src="../assets/bish.png" alt="" />
          </div>
          <div class="one">
            <img data-reveal src="../assets/bish.png" alt="" />
          </div>
          <div class="two">
            <img data-reveal src="../assets/bish.png" alt="" />
          </div>
          <div class="three">
            <img data-reveal src="../assets/bish.png" alt="" />
          </div>
          <div class="four">
            <img data-reveal src="../assets/bish.png" alt="" />
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
            <img src="../assets/gallery.png" alt="" />
          </div>
          <div>
            <img src="../assets/gallery.png" alt="" />
          </div>
          <div class="tall">
            <img src="../assets/gallery.png" alt="" />
          </div>
          <div class="wide">
            <img src="../assets/gmid.png" alt="" />
          </div>
          <div>
            <img src="../assets/gsmall1.png" alt="" />
          </div>
          <div class="tall">
            <img src="../assets/gsmall2.png" alt="" />
          </div>
          <div class="">
            <img src="../assets/gbig.png" alt="" />
          </div>
          <div>
            <img src="../assets/gsmall.png" alt="" />
          </div>
          <div class="wide">
            <img src="../assets/gallery.png" alt="" />
          </div>
          <div class="big">
            <img src="../assets/gbig.png" alt="" />
          </div>
          <div class="tall">
            <img src="../assets/gallery.png" alt="" />
          </div>
          <div>
            <img src="../assets/gsmall1.png" alt="" />
          </div>
          <div>
            <img src="../assets/gsmall2.png" alt="" />
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

            <q-btn data-reveal flat no-wrap no-caps>
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
          <div style="gap: 1rem" class="winner row items-center no-wrap">
            <div>
              <img data-reveal src="../assets/win3.png" alt="" />
              <p class="placeText">1st Place</p>
            </div>
            <div>
              <h5 class="paragraphText text-white">Esther Olalude</h5>

              <p data-reveal class="paragraphsmallText text-white">
                1st Place,Kukah Prize for Young Innovators (2022) (Age 20)
                Founder, Venille Sanitary Pads
              </p>

              <q-btn data-reveal flat no-wrap no-caps>
                Read more
                <span
                  class="bg-secondary q-ml-md"
                  style="width: 38.596px; height: 38.596px; border-radius: 50%"
                  ><img src="../assets/arrow.svg" alt=""
                /></span>
              </q-btn>
            </div>
          </div>

          <div style="gap: 1rem" class="winner row items-center no-wrap">
            <div>
              <img data-reveal src="../assets/win2.png" alt="" />
              <p class="placeText">2nd Place</p>
            </div>
            <div>
              <h5 class="paragraphText text-white">Rebecca Adeosun</h5>

              <p data-reveal class="paragraphsmallText text-white">
                2nd Place, Kukah Prize for Young Innovators (2022) (Age 26)
                Founder, Ocycle
              </p>

              <q-btn data-reveal flat no-wrap no-caps>
                Read more
                <span
                  class="bg-secondary q-ml-md"
                  style="width: 38.596px; height: 38.596px; border-radius: 50%"
                  ><img src="../assets/arrow.svg" alt=""
                /></span>
              </q-btn>
            </div>
          </div>

          <div class="winner">
            <div data-reveal>
              <img src="../assets/win1.png" alt="" />
              <p class="placeText">3rd Place</p>
            </div>
            <div>
              <h5 class="paragraphText text-white">
                Johnson Jaiyeola, with Paul Jaiyeola & Oreoluwa Adetoro
              </h5>

              <p data-reveal class="paragraphsmallText text-white">
                3rd Place, Kukah Prize for Young Innovators (2022) (Age 21)
                Co-Founders, Helgg Scooters.
              </p>

              <q-btn data-reveal flat no-wrap no-caps>
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

            <q-btn data-reveal flat no-wrap no-caps>
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
                Tap Into The Potentials of a <br />
                <strong>$5,000,000,000,000</strong> <br />
                INDUSTRY
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterCompVue data-reveal />
  </q-page>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import FooterCompVue from "src/components/FooterComp.vue";
import PartnersComp from "src/components/PartnersComp.vue";
import { onMounted, ref } from "vue";
import gsap from "gsap";
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
