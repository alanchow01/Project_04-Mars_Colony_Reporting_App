(function() {
  'use strict';

  angular
    .module('red')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options for third-party libraries here

  }

})();
