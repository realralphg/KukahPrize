<template>
  <div>
    <div style="gap: 2rem" class="column items-start no-wrap">
      <div class="q-mt-lg winne">
        <iframe
          width="100%"
          height="300"
          :src="data.video_link"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <section class="manzo">
          <div class="container">
            <div class="left text-left">
              <h3>{{ data.name1 }}</h3>
              <h6 class="q-mb-md">{{ data.position }}</h6>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="paragraphs">
      <p v-for="(desc, index) in data.desc" :key="index">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  data: Object,
});
</script>

<style lang="scss" scoped>
p {
  line-height: 2.5;
}

p.placeText {
  line-height: 1.3;
}

.row {
  margin-bottom: 3rem;
}

.paragraphs.cat p {
  color: white;
}

.column {
  div {
    width: 100%;
  }
}

section.manzo {
  padding: 0;
  background: transparent;

  .container {
    border-bottom: none;
    padding: 0;
    width: 100%;

    .left h3,
    .left h6 {
      color: #1b3459;
    }

    .left h3 {
      font-family: "todesBold", sans-serif;
      color: #1b3459;
      font-size: 1.4rem;
      line-height: 1.4;
    }
    .left h6 {
      font-family: "campton", sans-serif;
      color: #1b3459;
      font-size: 1.1rem;
    }
  }
}

.img_ralph {
  max-width: 350px;
}
.winne {
  background: #e4e4e4;
}
@media (max-width: 500px) {
  p {
    font-size: 12px;
  }

  p.placeText {
    font-size: 14px;
  }
  section.manzo {
    .container {
      .left h3 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      .left h6 {
        font-size: 0.8rem;
        line-height: 1.5;
      }
    }
  }
}
</style>
