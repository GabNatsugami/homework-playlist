var app = new Vue({
  el: "#app",
  data: {
    audio: "",
    imgLoaded: false,
    currentlyPlaying: false,
    currentlyStopped: false,
    currentTime: 0,
    checkingCurrentPositionInTrack: "",
    trackDuration: 0,
    currentProgressBar: 0,
    isPlaylistActive: false,
    currentSong: 0,
    debug: false,
    musicPlaylist: [
    {
      title: "ビターチョコデコレーション",
      artist: "25時、ナイトコードで。",
      url: "./%E3%83%93%E3%82%BF%E3%83%BC%E3%83%81%E3%83%A7%E3%82%B3%E3%83%87%E3%82%B3%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3.mp3",
      image: "Images/ビターチョコデコレーション.png" },

],
    
    audioFile: "" },

  mounted: function () {
    this.changeSong();
    this.audio.loop = false;
  },
  filters: {
    fancyTimeFormat: function (s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
    } },

  methods: {
    togglePlaylist: function () {
      this.isPlaylistActive = !this.isPlaylistActive;
    },
    nextSong: function () {
      if (this.currentSong < this.musicPlaylist.length - 1)
      this.changeSong(this.currentSong + 1);
    },
    prevSong: function () {
      if (this.currentSong > 0) this.changeSong(this.currentSong - 1);
    },
    changeSong: function (index) {
      var wasPlaying = this.currentlyPlaying;
      this.imageLoaded = false;
      if (index !== undefined) {
        this.stopAudio();
        this.currentSong = index;
      }
      this.audioFile = this.musicPlaylist[this.currentSong].url;
      this.audio = new Audio(this.audioFile);
      var localThis = this;
      this.audio.addEventListener("loadedmetadata", function () {
        localThis.trackDuration = Math.round(this.duration);
      });
      this.audio.addEventListener("ended", this.handleEnded);
      if (wasPlaying) {
        this.playAudio();
      }
    },
    isCurrentSong: function (index) {
      if (this.currentSong == index) {
        return true;
      }
      return false;
    },
    getCurrentSong: function (currentSong) {
      return this.musicPlaylist[currentSong].url;
    },
    playAudio: function () {
      if (
      this.currentlyStopped == true &&
      this.currentSong + 1 == this.musicPlaylist.length)
      {
        this.currentSong = 0;
        this.changeSong();
      }
      if (!this.currentlyPlaying) {
        this.getCurrentTimeEverySecond(true);
        this.currentlyPlaying = true;
        this.audio.play();
      } else {
        this.stopAudio();
      }
      this.currentlyStopped = false;
    },
    stopAudio: function () {
      this.audio.pause();
      this.currentlyPlaying = false;
      this.pausedMusic();
    },
    handleEnded: function () {
      if (this.currentSong + 1 == this.musicPlaylist.length) {
        this.stopAudio();
        this.currentlyPlaying = false;
        this.currentlyStopped = true;
      } else {
        this.currentlyPlaying = false;
        this.currentSong++;
        this.changeSong();
        this.playAudio();
      }
    },
    onImageLoaded: function () {
      this.imgLoaded = true;
    },
    getCurrentTimeEverySecond: function (startStop) {
      var localThis = this;
      this.checkingCurrentPositionInTrack = setTimeout(
      function () {
        localThis.currentTime = localThis.audio.currentTime;
        localThis.currentProgressBar =
        localThis.audio.currentTime / localThis.trackDuration * 100;
        localThis.getCurrentTimeEverySecond(true);
      }.bind(this),
      1000);

    },
    pausedMusic: function () {
      clearTimeout(this.checkingCurrentPositionInTrack);
    },
    toggleDebug: function () {
      this.debug = !this.debug;
      document.body.classList.toggle('debug');
    } },

  watch: {
    currentTime: function () {
      this.currentTime = Math.round(this.currentTime);
    } },

  beforeDestroy: function () {
    this.audio.removeEventListener("ended", this.handleEnded);
    this.audio.removeEventListener("loadedmetadata", this.handleEnded);

    clearTimeout(this.checkingCurrentPositionInTrack);
  } });
  const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 

  document.documentElement.style.setProperty('--main-bg-color', randomColor);
  document.body.style.zoom="150%";