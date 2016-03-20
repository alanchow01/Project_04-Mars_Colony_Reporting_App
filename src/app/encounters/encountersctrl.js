(function() {
  'use strict';

  angular
  .module('red')
  .controller('EncountersCtrl', EncountersCtrl);

  /** @ngInject */
  function EncountersCtrl($location, $scope, $http, $state, $rootScope, $cookies, $window, marsAPIFactory) {
    var colonist = $cookies.getObject('session_colonist');
    $scope.userInfo = {
      name: colonist.name,
      job: colonist.job.name
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
