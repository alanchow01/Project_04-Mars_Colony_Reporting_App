(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $state) {
      $scope.description = 'Mars Colony App';

      $scope.appEnter = function(event){
        event.preventDefault();
        $state.go('check-in');
      };
  }

})();
