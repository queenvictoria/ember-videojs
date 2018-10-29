// blueprints/ember-videojs/index.js
module.exports = {
  description: 'ember-videojs',
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'video.js' },
    ]);
  }
};
