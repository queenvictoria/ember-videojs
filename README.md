ember-videojs
==============================================================================

Use [VideoJS](https://videojs.com/) HTML5 video player components in your Ember project.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-videojs
```


Usage
------------------------------------------------------------------------------

```handlebars
{{videojs-player src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" poster="https://vjs.zencdn.net/v/oceans.png"}}
```

### Add multiple sources.

```handlebars
{{videojs-player sources=sources}}
```

```javascript
this.set("sources", [
  {
    type: "video/mp4",
    src="https://vjs.zencdn.net/v/oceans.mp4"
  },
  {
    type: "video/webm",
    src="https://vjs.zencdn.net/v/oceans.webm"
  },
]);
```

[VideoJS documentation](https://docs.videojs.com/)

### Autoplay

- `autoplay`: true\|false

```handlebars
{{videojs-player autoplay=true}}
```

### Controls

- `controls`: true\|false

```handlebars
{{videojs-player controls=true}}
```

### Plays inline

[Plays inline](https://webkit.org/blog/6784/new-video-policies-for-ios/) for mobile Safari.

- `playsinline`: true\|false

```handlebars
{{videojs-player playsinline=true}}
```

#### Click to play without controls

```handlebars
{{!-- app/templates/components/player.hbs}}
{{videojs-player controls=false click=(action "togglePlay")}}
```

``` javascript
// app/components/player.js

actions: {
  togglePlay: function(player) {
    if (player.paused()) {
      player.play();
    } else {
      player.pause();
    }
  }
}
```

### Sizing

- `width`: an integer in pixels (VideoJS doesn't support CSS style sizing)
- `height`: an integer in pixels (VideoJS doesn't support CSS style sizing)
- `fluid`: adds the .vjs-fluid class and will scale to fit the container and content.

```handlebars
{{videojs-player width=640 height=320}}
{{videojs-player fluid=true}}
```

### AspectRatio 

- `aspectRatio`: This option is in the form of two integers separated by a colon like so 16:9 or 4:3

```handlebars
{{videojs-player aspectRatio='16:9'}}
```

### 360 videos and VR

Install the [videojs-vr](https://github.com/videojs/videojs-vr#installation) plugin

- `npm install --save videojs-vr`

Add the import statement to your ember-cli-build.js file.

```
app.import('node_modules/videojs-vr/dist/videojs-vr.min.js');
app.import('node_modules/videojs-vr/dist/videojs-vr.min.js');
```

Add the [vr-projection](https://github.com/videojs/videojs-vr#projection) attribute to your component

- `vr-projection`: '360', 'Sphere', or 'equirectangular'

```handlebars
{{videojs-player vrProjection="360"}}
```

### Skinning

VideoJS doesn't provide a way to interact with it's styles. Just override them in your `styles.css`.

```CSS
  .video-js .vjs-big-play-button {};
  .video-js .vjs-big-vr-play-button {};

  .video-js .vjs-control-bar {};
  .vjs-has-started .vjs-control-bar {};

  .video-js .vjs-control {};
  .vjs-icon-play:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder:before {};

  .vjs-icon-play:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder:before {};

  .video-js .vjs-volume-panel {};

  .video-js .vjs-mute-control {};
  .vjs-icon-volume-high:before, .video-js .vjs-mute-control .vjs-icon-placeholder:before {};

  .video-js .vjs-progress-control {};

  .video-js .vjs-progress-holder .vjs-play-progress, .video-js .vjs-progress-holder .vjs-load-progress, .video-js .vjs-progress-holder .vjs-load-progress div {};

  .video-js .vjs-time-control {};

  .video-js .vjs-fullscreen-control {};
  .vjs-icon-fullscreen-enter:before, .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {};

  .vjs-icon-subtitles, .video-js .vjs-subtitles-button .vjs-icon-placeholder, .video-js .vjs-subs-caps-button .vjs-icon-placeholder, .video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder, .video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder, .video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder, .video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder {};

  .vjs-icon-subtitles:before, .video-js .vjs-subtitles-button .vjs-icon-placeholder:before, .video-js .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before {};

  /* Uses inline styles on the grandchild */
  .vjs-text-track-display {};
```

### Closed captions and subtitles

Add a text track to your video in the `WebVTT` format.

- `textTrack`: [track URL]

```handlebars
{{videojs-player textTrack="captions-mi.vtt"}}
```

Add multiple tracks or configure the text track options in your component.

```handlebars
{{videojs-player textTracks=textTracks}}
```

```javascript
this.set("textTracks", [
  {
    kind: "captions",
    label: "Maori",
    language: "mi",
    src="captions-mi.vtt",
    type="text/vtt"
  },
  {
    kind: "captions",
    label: "English",
    language: "en",
    src="captions-en.vtt",
    type="text/vtt"
  }
]);
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
