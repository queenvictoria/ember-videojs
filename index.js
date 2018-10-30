/* eslint-env node */
'use strict';
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'ember-videojs',

  // https://github.com/IvyApp/ivy-videojs/blob/master/index.js
  included(app) {
    this._super.included.apply(this, arguments);

    const baseDirectory = 'node_modules/video.js/dist';

    app.import({
      development: path.join(baseDirectory, 'video-js.css'),
      production:  path.join(baseDirectory, 'video-js.min.css')
    });

    // app.import(path.join(baseDirectory, 'font/VideoJS.eot'), { destDir: 'assets/font' });
    // app.import(path.join(baseDirectory, 'font/VideoJS.svg'), { destDir: 'assets/font' });
    // app.import(path.join(baseDirectory, 'font/VideoJS.ttf'), { destDir: 'assets/font' });
    // app.import(path.join(baseDirectory, 'font/VideoJS.woff'), { destDir: 'assets/font' });

    app.import({
      development: path.join(baseDirectory, 'video.js'),
      production: path.join(baseDirectory, 'video.min.js'),
    });
    app.import('vendor/shims/videojs.js');
  },


  treeForVendor: function(vendorTree){
    var videojsPath = path.dirname(require.resolve('video.js'));

    var trees = [];
    if(vendorTree){
      trees.push(vendorTree);
    }

    var videojsTree = new Funnel(videojsPath, {
      srcDir: '/',
      destDir: 'videojs',
    });

    trees.push(videojsTree);

    return new MergeTrees(trees, { overwrite: true });
  },

  isDevelopingAddon() {
    return true;
  }

};
