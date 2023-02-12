<template>
  <v-app>
    <v-main>
      <header class="header">
        <div class="header__inner">
          <div class="header__logo">
            <router-link @mouseover="textToSpeech" :to="{ name: 'home' }">
              <img
                :src="require('@/assets/img/logo.png')"
                alt="Cool-ore Logo"
              />
            </router-link>
          </div>
          <v-spacer></v-spacer>

          <nav class="header__nav" :class="isNavOpen ? 'nav-open' : ''">
            <v-btn
              @click="navigation"
              class="header__close"
              elevation="0"
              small
              icon
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="header__subheader">
              <router-link @mouseover="textToSpeech" :to="{ name: 'home' }">
                <img
                  :src="require('@/assets/img/logo.png')"
                  alt="Cool-ore Logo"
                />
              </router-link>
            </div>

            <div class="header__links">
              <router-link @mouseover="textToSpeech" :to="{ name: 'about' }"
                >About</router-link
              >
              <router-link @mouseover="textToSpeech" :to="{ name: 'contact' }"
                >Contact</router-link
              >
              <router-link @mouseover="textToSpeech" :to="{ name: 'article' }"
                >Article</router-link
              >
            </div>
            <!-- <v-btn @mouseover="textToSpeech" @click="changeColor">Color</v-btn> -->
          </nav>

          <div class="header__collection">
            <v-btn
              @mouseover="textToSpeech"
              class="header__resume"
              variant="outlined"
              elevation="0"
            >
              Resume
            </v-btn>

            <v-app-bar-nav-icon
              @click="navigation"
              class="header__burger"
              elevation="0"
            ></v-app-bar-nav-icon>
          </div>
        </div>
      </header>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Speech from "@/utils/Speech";

export default defineComponent({
  name: "App",
  setup() {
    const { state, commit } = useStore();
    // const isListening = ref(false);
    const isNavOpen = ref(false);

    function changeColor() {
      let root = document.querySelector(":root");
      let gcs = getComputedStyle(root);
      let primaryColor = gcs.getPropertyValue("--primary-color");
      let secondaryColor = gcs.getPropertyValue("--secondary-color");

      root.style.setProperty("--primary-color", "green");
      root.style.setProperty("--secondary-color", "yellow");
    }

    function textToSpeech(e) {
      commit("textToSpeech/textToSpeech", {
        event: e,
      });
    }

    function navigation() {
      isNavOpen.value = !isNavOpen.value;
    }

    function read(e) {
      console.log(e);
    }

    return {
      changeColor,
      textToSpeech,
      navigation,
      read,
      state,
      isNavOpen,
    };
  },
  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
@include reset();

.header {
  outline: 1px solid black;
  &__inner {
    @include flex($justify: space-between);
    margin: 0 2rem;
  }

  &__nav {
    @include flex($dir: column, $justify: space-around);
    background-color: var(--primary-color);
    box-shadow: 0px 0px 1px 0px #090909;
    width: 15rem;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;

    transform: translateX(20rem);
    transition: transform 500ms ease-in;
  }

  &__close {
    @include position(absolute, $tl: true, $x: 1rem, $y: 1rem);
    background-color: var(--primary-color);
  }

  &__burger,
  &__resume {
    background-color: var(--primary-color);
  }

  &__subheader,
  &__logo {
    width: 4rem;
  }

  &__links {
    @include flex($dir: column, $justify: space-around);
    color: green;
    margin-bottom: 5rem;
    height: 20rem;
  }

  &__collection {
    @include flex($justify: space-between, $gap: 1rem);
  }
}

.nav-open {
  transform: translateX(0);
}

@media (min-width: $min-width-tablet) {
  .header {
    // &__inner {
    //   margin: 0 4rem;
    // }
    &__nav {
      @include flex($dir: row, $justify: space-around);
      margin-right: 1rem;
      box-shadow: none;
      width: 25rem;
      position: relative;
      transform: translateX(0);
    }

    &__burger,
    &__close,
    &__subheader {
      display: none;
    }

    &__links {
      @include flex($dir: row, $justify: space-around);
      width: 100%;
      margin-bottom: 0;
      height: auto;
    }
  }
}

@media (min-width: $min-width-desktop) {
  .header {
    &__inner {
      margin: 0 4.25rem;
    }
  }
}
</style>
