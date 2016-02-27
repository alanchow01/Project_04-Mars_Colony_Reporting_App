(function() {
  'use strict';

  angular
    .module('red')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, $cookies) {
    $rootScope.$state = $state;

    $log.debug('Run block end!');

    $rootScope.$on('$stateChangeStart', function(event, toState){
      $rootScope.stateName = toState.name;
      $rootScope.user = $cookies.getObject('session_colonist');
    });
  }
})();

//, toParams, fromState, fromParams
