(function() {
  'use strict';

  angular
    .module('red')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('Run block end!');
  }

})();
