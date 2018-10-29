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
      this.set("vr-crossorigin", "anonymous");
      player.vr({projection: this.get("vr-projection")});
    }

    this.set("player", player);
  },

});
