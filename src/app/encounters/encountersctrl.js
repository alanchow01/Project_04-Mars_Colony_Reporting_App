(function() {
  'use strict';

  angular
  .module('red')
  .controller('EncountersCtrl', EncountersCtrl);

  /** @ngInject */
  function EncountersCtrl($scope, $http, $state, $rootScope, $cookies) {
    var REPORTS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    $scope.userInfo = {
      name: $cookies.getObject('session_colonist').name,
      job: $cookies.getObject('session_colonist').job.name
    };
    $http({
      method: 'GET',
      url: REPORTS_GET_URL
    }).then(function(response){
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
