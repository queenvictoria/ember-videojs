(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['videojs-vr'],
      __esModule: true,
    };
  }

  define('videojs-vr', [], vendorModule);
})();
