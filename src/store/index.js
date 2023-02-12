import { createStore } from "vuex";
import { textToSpeech } from "./modules/textToSpeech";
import { colorblind } from "./modules/colorblindTypes";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    textToSpeech,
    colorblind,
  },
});
