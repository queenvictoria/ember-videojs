import Ember from "ember";

export default Ember.Controller.extend({
  sources: [
    { src: "https://vjs.zencdn.net/v/oceans.mp4", type: "video/mp4" },
    { src: "https://vjs.zencdn.net/v/oceans.webm", type: "video/webm" }
  ],
});
