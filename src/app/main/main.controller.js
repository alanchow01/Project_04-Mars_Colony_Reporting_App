(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
      $scope.description = 'Mars Colony App';
  }

})();
