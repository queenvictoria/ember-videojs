ember-videojs
==============================================================================

Use the (VideoJS)[https://videojs.com/] player in your Ember project

Installation
------------------------------------------------------------------------------

```
ember install ember-videojs
```


Usage
------------------------------------------------------------------------------


```
{{videojs-player src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" poster="https://vjs.zencdn.net/v/oceans.png"}}
```

(VideoJS documentation)[https://docs.videojs.com/]

### 360 videos and VR

Install the (videojs-vr)[https://github.com/videojs/videojs-vr#installation] plugin

- `npm install --save videojs-vr`

Add the (vr-projection)[https://github.com/videojs/videojs-vr#projection] attribute to your component

- `vr-projection`: '360', 'Sphere', or 'equirectangular'




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
