(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckinCtrl', CheckinCtrl);

  /** @ngInject */
  function CheckinCtrl($scope) {
    $scope.description = 'Check-in Page';

  }

})();
