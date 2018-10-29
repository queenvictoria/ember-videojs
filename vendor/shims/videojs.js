(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['videojs'],
      __esModule: true,
    };
  }

  define('videojs', [], vendorModule);
})();
