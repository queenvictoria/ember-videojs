import Component from '@ember/component';
import layout from '../templates/components/videojs-base';
import videojs from 'videojs';

export default Component.extend({
  layout,
  player: null,

  didInsertElement() {
    this._super(...arguments);

    const element = this.$().find("video")[0];
    const player = videojs(element);

    // Register plugins
    // Get global plugins from config.
    player.vr({projection: '360'});

    this.set("player", player);
  },

});
