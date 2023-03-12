class Speech {
  constructor(text) {
    this.text = text;
    this.speech = new SpeechSynthesisUtterance();
    this.synthesis = window.speechSynthesis;
    this.voices = this.synthesis.getVoices();
    this.currentVoice = 21;
    this.isListening = false;
  }

  debug() {
    console.log(this.speech);
    console.log(this.synthesis.getVoices());
  }

  setVoice(voiceIndex) {
    this.currentVoice = voiceIndex;
  }

  start() {
    console.log("START");
    console.log(this.synthesis.getVoices());
    // Listening
    this.isListening = !this.isListening;
    // Setting the Text and Voice
    // this.speech.pitch = 1.15;
    // this.speech.rate = 0.1;
    // this.speech.volume = 0.5;
    this.speech.text = this.text;
    this.speech.voice = this.voices[this.currentVoice];
    // Speak
    this.synthesis.speak(this.speech);

    console.log(this.speech);
  }

  get listening() {
    return this.speech;
  }

  get getVoices() {
    return this.voices;
  }
}

export default Speech;
