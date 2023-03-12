import Speech from "@/utils/Speech";

export const textToSpeech = {
  namespaced: true,
  state: {
    event: null,
    isListening: false,
    dialog: false,
    isSpeaking: false,
  },
  getters: {},
  mutations: {
    handleDialog(state, { event }) {
      // Preventing the Default Context Menu
      event.preventDefault();
      //   Open Dialog
      state.dialog = !state.dialog;
      //   Only Right Click
      if (event.which !== 3) return;
      //   Store the current target
      state.event = event;
    },

    allowSpeaking(state) {
      //
      state.isSpeaking = !state.isSpeaking;
      state.dialog = !state.dialog;
    },

    textToSpeech(state, { event }) {
      // Prevent Spamming
      if (state.isListening) return;
      console.log("Text Speech Invoked");

      // Initialization of Important Components
      const btn = event.target.closest("button");
      const img = event.target.closest("img");
      const anchor = event.target.closest("a");
      const linkPath = anchor?.attributes["href"].nodeValue;
      let say;

      // Routnames for Speech
      switch (linkPath) {
        case "/":
          if (img) {
            say = `This is the homepage logo that goes to the ${linkPath} homepage.`;
          } else {
            say = `This is home link and goes to the ${linkPath} homepage.`;
          }
          break;
        case "/about":
          say = `This is about link and goes to the ${linkPath} page.`;
          break;
        case "/contact":
          say = `This is contact link and goes to the ${linkPath} page.`;
          break;
        case "/article":
          say = `This is article link and goes to the ${linkPath} page.`;
          break;

        default:
          if (btn) {
            say = `This is ${event.target.textContent} button`;
          } else if (event.which === 3) {
            say = `${event.target.textContent}`;
          } else {
            say = "This is going to nothing route";
          }
      }

      // Creating the Speech Object
      const speech = new Speech(say);

      // Start the speech
      speech.start();

      // Listening for the start and turn isListening to true
      speech.listening.onstart = () => {
        console.log("Speech Start");
        state.isListening = !state.isListening;
      };

      // Listening for the end and turn isListening to false
      speech.listening.onend = () => {
        console.log("Speech End");
        state.isListening = !state.isListening;
      };
    },
  },
  actions: {},
  modules: {},
};
