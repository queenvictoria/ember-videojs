ember-videojs
==============================================================================

Use [VideoJS](https://videojs.com/) HTML5 video player components in your Ember project.

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
{{video-js sources=sources}}
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
{{video-js autoplay=true}}
```

### Controls

- `controls`: true\|false

```handlebars
{{video-js controls=true}}
```

#### Click to play without controls

```handlebars
{{!-- app/templates/components/player.hbs}}
{{video-js controls=false click="togglePlay"}}
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
{{video-js width=640 height=320}}
{{video-js fluid=true}}
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
{{video-js vrProjection="360"}}
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
{{video-js textTrack="captions-mi.vtt"}}
```

Add multiple tracks or configure the text track options in your component.

```handlebars
{{video-js textTracks=textTracks}}
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

### Installation

* `git clone <repository-url>`
* `cd ember-videojs`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
