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

    {
      title: "カナデトモスソラ",
      artist: "25時、ナイトコードで。",
      url: "./%E3%82%AB%E3%83%8A%E3%83%87%E3%83%88%E3%83%A2%E3%82%B9%E3%82%BD%E3%83%A9.mp3",
      image: "Images/カナデトモスソラ.png" },

    {
      title: "再生",
      artist: "25時、ナイトコードで。",
      url: "./%E5%86%8D%E7%94%9F.mp3",
      image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_142_rip/jacket_s_142.webp" },

    {
      title: "悔やむと書いてミライ",
      artist: "25時、ナイトコードで。",
      url: "./%E6%82%94%E3%82%84%E3%82%80%E3%81%A8%E6%9B%B8%E3%81%84%E3%81%A6%E3%83%9F%E3%83%A9%E3%82%A4.mp3",
      image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_060_rip/jacket_s_060.webp" },

      {
        title: "携帯恋話",
        artist: "25時、ナイトコードで。",
        url: "./%E6%90%BA%E5%B8%AF%E6%81%8B%E8%A9%B1.mp3",
        image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_061_rip/jacket_s_061.webp" },

        {
          title: "命に嫌われている",
          artist: "25時、ナイトコードで。",
          url: "./%E5%91%BD%E3%81%AB%E5%AB%8C%E3%82%8F%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B.mp3",
          image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_022_rip/jacket_s_022.webp" },

          {
            title: "ジャックポットサッドガール",
            artist: "25時、ナイトコードで。",
            url: "./%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AF%E3%83%9D%E3%83%83%E3%83%88%E3%82%B5%E3%83%83%E3%83%89%E3%82%AC%E3%83%BC%E3%83%AB.mp3",
            image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_062_rip/jacket_s_062.webp" },

            {
              title: "ハロ／ハワユ",
              artist: "25時、ナイトコードで。",
              url: "./%E3%83%8F%E3%83%AD%EF%BC%8F%E3%83%8F%E3%83%AF%E3%83%A6.mp3",
              image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_066_rip/jacket_s_066.webp" },
  
              {
                title: "自傷無色",
                artist: "25時、ナイトコードで。",
                url: "./%E8%87%AA%E5%82%B7%E7%84%A1%E8%89%B2.mp3",
                image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_067_rip/jacket_s_067.webp" },

                {
                  title: "乙女解剖",
                  artist: "25時、ナイトコードで。",
                  url: "./%E4%B9%99%E5%A5%B3%E8%A7%A3%E5%89%96.mp3",
                  image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_092_rip/jacket_s_092.webp" },

                  {
                    title: "とても痛い痛がりたい",
                    artist: "25時、ナイトコードで。",
                    url: "./%E3%81%A8%E3%81%A6%E3%82%82%E7%97%9B%E3%81%84%E7%97%9B%E3%81%8C%E3%82%8A%E3%81%9F%E3%81%84.mp3",
                    image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_094_rip/jacket_s_094.webp" },

                    {
                      title: "カトラリー",
                      artist: "25時、ナイトコードで。",
                      url: "./%E3%82%AB%E3%83%88%E3%83%A9%E3%83%AA%E3%83%BC.mp3",
                      image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_111_rip/jacket_s_111.webp" },

                      {
                        title: "アイディスマイル",
                        artist: "25時、ナイトコードで。",
                        url: "./%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A3%E3%82%B9%E3%83%9E%E3%82%A4%E3%83%AB.mp3",
                        image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_116_rip/jacket_s_116.webp" },

                        {
                          title: "愛して愛して愛して",
                          artist: "25時、ナイトコードで。",
                          url: "./%E6%84%9B%E3%81%97%E3%81%A6%E6%84%9B%E3%81%97%E3%81%A6%E6%84%9B%E3%81%97%E3%81%A6.mp3",
                          image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_181_rip/jacket_s_181.webp" },
  
                          {
                            title: "トリコロージュ",
                            artist: "25時、ナイトコードで。",
                            url: "./%E3%83%88%E3%83%AA%E3%82%B3%E3%83%AD%E3%83%BC%E3%82%B8%E3%83%A5.mp3",
                            image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_203_rip/jacket_s_203.webp" },

                            {
                              title: "ロウワー",
                              artist: "25時、ナイトコードで。",
                              url: "./%E3%83%AD%E3%82%A6%E3%83%AF%E3%83%BC.mp3",
                              image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_187_rip/jacket_s_187.webp" },

                              {
                                title: "ノマド",
                                artist: "25時、ナイトコードで。",
                                url: "./%E3%83%8E%E3%83%9E%E3%83%89.mp3",
                                image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_189_rip/jacket_s_189.webp" },

                                {
                                  title: "Flyer!",
                                  artist: "Vivid BAD SQUAD",
                                  url: "./Flyer!.mp3",
                                  image: "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_182_rip/jacket_s_182.webp" }],
    
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