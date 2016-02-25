(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersCtrl', EncountersCtrl);

  /** @ngInject */
  function EncountersCtrl($scope, $http) {
    var REPORTS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    $http({
      method: 'GET',
      url: REPORTS_GET_URL
    }).then(function(response){
      $scope.encounters = response.data.encounters; //assigns JSON object to 'jobs' in ng-repeat
    }, function(error){
      //TODO: handle error
    });
  }

})();
