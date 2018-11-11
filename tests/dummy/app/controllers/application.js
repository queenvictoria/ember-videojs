import Controller from '@ember/controller';

export default Controller.extend({

  init() {
    this._super(...arguments);
    this.sources = [
      { src: "https://vjs.zencdn.net/v/oceans.mp4", type: "video/mp4" },
      { src: "https://vjs.zencdn.net/v/oceans.webm", type: "video/webm" }
    ];
  },

  actions: {
    progress: function(e) {
      console.log("progress");
    },

    ready: function() {
      console.log("ready");
    },

    togglePlay: function(player) {
      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
    },
  }

});
