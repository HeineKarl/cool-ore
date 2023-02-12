class Speech {
  constructor(text) {
    this.text = text;
    this.speech = new window.SpeechSynthesisUtterance();
    this.synthesis = window.speechSynthesis;
    this.voices = this.synthesis.getVoices();
    this.currentVoice = 2;
    this.isListening = false;
  }

  setVoice(voiceIndex) {
    this.currentVoice = voiceIndex;
  }

  start() {
    // Listening
    this.isListening = !this.isListening;
    // Setting the Text and Voice
    this.speech.text = this.text;
    this.speech.voice = this.voices[this.currentVoice];
    // Speak
    this.synthesis.speak(this.speech);
  }

  get listening() {
    return this.speech;
  }

  get getVoices() {
    return this.voices;
  }
}

export default Speech;
