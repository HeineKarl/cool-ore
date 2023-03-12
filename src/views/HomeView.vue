<template>
  <div class="home">
    <section class="home__intro">
      <div class="home__content">
        <span>Karl Vincent Del Rosario</span>
        <h1>Designing in its finest!</h1>
        <p @contextmenu="handleDialog">
          Hello! My name is Karl Vincent and I am always fascinated by creating
          things in digital realm. It's not about creating things that made my
          interest in web development, but the empowerment and possibility to
          change is a wonderful gift to share.
        </p>
      </div>
      <div class="home__img">
        <img :src="require('@/assets/img/my_image.png')" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

// Components

export default defineComponent({
  name: "HomeView",

  components: {},

  setup() {
    const { state, commit, dispatch } = useStore();
    const router = useRoute();
    dispatch("generateToken", { routename: router.name });

    console.log(router.name);

    function textToSpeech(e) {
      commit("textToSpeech/textToSpeech", {
        event: e,
      });
    }

    function handleDialog(e) {
      commit("textToSpeech/handleDialog", { event: e });
    }

    return {
      textToSpeech,
      handleDialog,
      state,
    };
  },
});
</script>

<style lang="scss">
.home {
  margin: 2rem 2rem 0;

  &__intro {
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }

  &__content {
    max-width: 30rem;
    @include flex(
      $dir: column,
      $align: flex-start,
      $justify: space-between,
      $gap: 1rem
    );

    span {
      @include font(
        clamp(0.95rem, 2vw, 1rem),
        $weight: 300,
        $clr: var(--secondary-color)
      );
    }

    h1 {
      @include font(
        clamp(2.5rem, 5vw, 4rem),
        $weight: 800,
        $clr: var(--secondary-color)
      );
    }

    p {
      @include font(
        clamp(0.95rem, 1.5vw, 1rem),
        $weight: 400,
        $clr: var(--secondary-color)
      );
      line-height: 1.5;
    }
  }

  &__img {
    width: 14rem;
    width: clamp(15rem, 35vw, 20rem);
  }

  &__dialog {
    width: 25rem;
  }
}

@media (min-width: $min-width-tablet) {
  .home {
    &__intro {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      height: 27rem;
    }
  }
}
// @media (min-width: $min-width-desktop) {
//   .home {
//   }
// }
</style>
