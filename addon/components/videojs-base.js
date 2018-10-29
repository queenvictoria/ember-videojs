import Component from '@ember/component';
import layout from '../templates/components/videojs-base';

export default Component.extend({
  layout,
  player: null,

  didInsertElement() {
    this._super(...arguments);

    const element = this.$().find("video")[0];
    const player = videojs(element);

    this.set("player", player);
  },

});
