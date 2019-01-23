import Component from '@ember/component';
import {computed} from '@ember/object';
import layout from '../templates/components/videojs-base';
import videojs from 'videojs';

// https://github.com/IvyApp/ivy-videojs/blob/0bb2e1513bec874f9ce9cf48ffd3f6996623553b/addon/components/ivy-videojs.js
export default Component.extend({
  layout,
  player: null,

  // Defaults
  autoplay: false,
  controls: true,
  fluid: false,
  loop: false,
  height: null,
  width: null,
  muted: false,

  dataSetup: computed("muted", "loop", "controls", "autoplay", function(){
    return JSON.stringify(this.getProperties("muted", "loop", "controls", "autoplay"));
  }),

  /**
   * The set of video.js player events (and associated actions) to be set up
   * inside `didInsertElement`. If you need to respond to custom video.js
   * player events, such as those emitted by a plugin, you should do so by
   * calling `sendActionOnPlayerEvent` inside your `ready` handler.
   *
   * ```javascript
   * import Ember from 'ember';
   *
   * export default Ember.Controller.extend({
   *   actions: {
   *     ready(player, component) {
   *       component.sendActionOnPlayerEvent(player, 'actionName', 'eventName');
   *     }
   *   }
   * });
   * ```
   *
   * The above would send the `actionName` action in response to an `eventName`
   * event from the player.
   *
   * @property playerEvents
   * @type Object
   * @private
   */
  playerEvents: {
    abort: 'abort',
    canplay: 'canplay',
    canplaythrough: 'canplaythrough',
    durationchange: 'durationchange',
    emptied: 'emptied',
    ended: 'ended',
    error: 'error',
    loadeddata: 'loadeddata',
    loadedmetadata: 'loadedmetadata',
    loadstart: 'loadstart',
    pause: 'pause',
    play: 'play',
    playing: 'playing',
    progress: 'progress',
    ratechange: 'ratechange',
    resize: 'resize',
    seeked: 'seeked',
    seeking: 'seeking',
    stalled: 'stalled',
    suspend: 'suspend',
    timeupdate: 'timeupdate',
    useractive: 'useractive',
    userinactive: 'userinactive',
    volumechange: 'volumechange',
    waiting: 'waiting',

    // @queenvictoria added
    click: 'click',
    tap: 'tap',
  },

  initPlayer() {
    let element = this.$().find('video').get(0);
    let player = videojs(element);

    if ( this.get('height') ) {
      player.height(this.get('height'));
    }

    if ( this.get('width') ) {
      player.width(this.get('width'));
    }

    if ( this.get('fluid') ) {
      player.fluid(this.get('fluid'));
    }

    // Register plugins
    // Get global plugins from config.
    if ( this.get('vr-projection') ) {
      if ( typeof player.vr === 'function' ) {
        this.set('vr-crossorigin', 'anonymous');
        player.vr({projection: this.get('vr-projection')});
      } else {
        console.error("It looks like you are trying to play a VR video without the videojs-vr library. Please `npm install --save-dev videojs-vr` and add `app.import('node_modules/videojs-vr/dist/videojs-vr.min.js');` to your ember-cli-build.js file.");
      }
    }

    // https://github.com/IvyApp/ivy-videojs/blob/master/addon/components/ivy-videojs-player.js
    player.ready(() => {
      // Set up a handler to automatically dispose the player on teardown.
      this.one('willDestroyElement', function() {
        player.dispose();
      });

      // Set up event listeners defined in `playerEvents`.
      let playerEvents = this.get('playerEvents');
      if (playerEvents) {
        for (let key in playerEvents) {
          if (!playerEvents.hasOwnProperty(key)) { continue; }
          this.sendActionOnPlayerEvent(player, key, playerEvents[key]);
        }
      }

      // Let the outside world know that we're ready.
      this.sendAction('ready', player, this);
    });

    this.set('player', player);
  },

  updatePlayer() {
    let element = this.$().find('video').get(0);
    let player = videojs(element);

    let source = this.get('src');
    let type = this.get('type');

    player.pause();
    player.src(source);
    player.load();
  },

  didRender() {
    this._super(...arguments);

    let player = this.get('player');

    if (player) {
      this.updatePlayer();
    } else {
      this.initPlayer();
    }
  },


  /**
   * Sets up a listener that sends an action on a video.js player event.
   *
   * @method sendActionOnPlayerEvent
   * @param {Player} player the video.js player instance
   * @param {String} action the action name to be sent
   * @param {String} playerEvent the player event name to listen for
   */
  sendActionOnPlayerEvent(player, action, playerEvent=action) {
    const listenerFunction = (...args) => {
      this.sendAction(action, player, this, ...args);
    };

    this._onPlayerEvent(player, playerEvent, listenerFunction);
  },

  /**
   * Sets the value of a property on a video.js player. If the property is
   * already equal to the given value, no change is made.
   *
   * @method setPlayerProperty
   * @param {Player} player the video.js player instance
   * @param {String} playerProperty the name of the property to set
   * @param {Object} value the value to set
   */
  setPlayerProperty(player, playerProperty, value) {
    const propertyMethod = player[playerProperty];
    if (propertyMethod) {
      const previousValue = propertyMethod.call(player);
      if (previousValue !== value) {
        propertyMethod.call(player, value);
      }
    }
  },

  _addPlayerObserver(property, target, observer) {
    if (this.isDestroying) {
      return;
    }

    this.addObserver(property, target, observer);

    this.one('willDestroyElement', this, function() {
      this.removeObserver(property, target, observer);
    });
  },

  _onPlayerEvent(player, eventName, listenerFunction) {
    player.on(eventName, listenerFunction);
  }
});
