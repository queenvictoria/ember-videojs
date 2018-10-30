import Component from '@ember/component';
import layout from '../templates/components/videojs-base';
import videojs from 'videojs';

export default Component.extend({
  layout,
  player: null,

  // Defaults
  autoplay: false,
  controls: true,
  loop: false,

  didInsertElement() {
    this._super(...arguments);

    const element = this.$().find("video").get(0);
    const player = videojs(element);

    // Register plugins
    // Get global plugins from config.
    if ( this.get("vr-projection") ) {
      if ( typeof player.vr === "function" ) {
        this.set("vr-crossorigin", "anonymous");
        player.vr({projection: this.get("vr-projection")});
      } else {
        console.error("It looks like you are trying to play a VR video without the videojs-vr library. Please `npm install --save-dev videojs-vr` and add `app.import('node_modules/videojs-vr/dist/videojs-vr.min.js');` to your ember-cli-build.js file.");
      }
    }

    this.set("player", player);
  },

});
