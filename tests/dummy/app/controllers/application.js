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

    play: function() {
      return;
    },

    ready: function() {
      return;
    },

    timeupdate: function(player/*, self, args*/) {
      console.log('Time update: ' + Math.round(player.currentTime()/player.duration()*100) + '%');
    },

    togglePlay: function(player) {
      if ( ! player || typeof player.paused !== 'function' )
        return

      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
    },
  }

});
