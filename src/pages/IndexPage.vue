<template>
  <q-page class="">
    <section class="hero">
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

    <section class="intro container">
      <div class="text-center">
        <h2 class="maintext text-primary">
          introduction<img src="../assets/introtext.svg" alt="" />
        </h2>
        <h5 class="subtext">THE KUKAH PRIZE FOR YOUNG INNOVATORS</h5>
        <p>
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
            The<span class="text-secondary"> Icon </span
            ><img src="../assets/thisicon.svg" alt="" />
          </h2>
        </div>

        <div class="grid">
          <div class="left">
            <h3>
              Bishop Matthew <br />
              Hassan Kukah
            </h3>

            <p>
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

            <q-btn flat no-wrap no-caps>
              Read more
              <span
                class="bg-secondary q-ml-md"
                style="width: 38.596px; height: 38.596px; border-radius: 50%"
                ><img src="../assets/arrow.svg" alt=""
              /></span>
            </q-btn>
          </div>
          <div class="right">
            <img src="../assets/bish.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
