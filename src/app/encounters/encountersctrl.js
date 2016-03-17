(function() {
  'use strict';

  angular
  .module('red')
  .controller('EncountersCtrl', EncountersCtrl);

  /** @ngInject */
  function EncountersCtrl($scope, $http, $state, $rootScope, $cookies, marsAPIFactory) {
    $scope.userInfo = {
      name: $cookies.getObject('session_colonist').name,
      job: $cookies.getObject('session_colonist').job.name
    };
    marsAPIFactory.getEncounters().then(function(response){
      $scope.encounters = response.data.encounters;
    }, function(error){
      //TODO: handle error
    });

    $scope.reportEncounter = function(event){
      event.preventDefault();
      $state.go('report');
    };
  }

})();
