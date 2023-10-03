<template>
  <div>
    <div style="gap: 2rem" class="row items-center no-wrap">
      <div>
        <img
          v-if="data.category"
          class="img_ralph"
          src="../assets/jude.png"
          alt=""
        />
        <img v-else class="img_ralph" src="../assets/ralph.png" alt="" />
      </div>

      <div>
        <section class="manzo">
          <div class="container">
            <div
              :class="
                data.category ? ' left text-center' : 'left cat text-center'
              "
            >
              <h3>{{ data.name }}</h3>
              <h6 class="q-mb-md">{{ data.position }}</h6>

              <div v-if="data.category" class="q-mt-md">
                <h5 class="text-white">{{ data.category }}</h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div :class="data.category ? 'cat paragraphs' : ' paragraphs'">
      <p v-if="data.dialog" class="placeText">
        {{ data.dialog.ques }}
      </p>
      <p>
        {{ data.dialog ? data.dialog.ans : data.text1 }}
      </p>
    </div>
    <div :class="data.category ? 'cat paragraphs' : ' paragraphs'">
      <p v-if="data.dialog2" class="placeText">
        {{ data.dialog2.ques }}
      </p>
      <p>
        {{ data.dialog2 ? data.dialog2.ans : data.text2 }}
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

section.manzo {
  padding: 0;
  background: transparent;
  .container {
    border-bottom: none;
    padding: 0;
    .left h3,
    .left h6 {
      color: white;
    }
    .left.cat h3,
    .left.cat h6 {
      color: #1b3459;
    }
  }
}

.img_ralph {
  max-width: 350px;
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
      h3 {
        font-size: 16px;
      }
      h6 {
        font-size: 1rem;
      }

      h5 {
        font-size: 1.1rem;
      }
    }
  }

  .row {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem !important;
    margin-bottom: 1rem;
  }

  .img_ralph {
    max-width: 350px;
    max-height: 220px;
  }
}
</style>
