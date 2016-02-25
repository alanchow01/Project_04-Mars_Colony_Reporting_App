(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $http, $filter) {
    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    $scope.encounters = {};
    var currentDate = new Date();
    $scope.encounters.date = $filter('date')(currentDate, 'yyyy-MM-dd');

    // fetch all jobs
    $http({
      method: 'GET',
      url: ALIENS_GET_URL
    }).then(function(response){
      $scope.aliens = response.data.aliens; //assigns JSON object to 'jobs' in ng-repeat
    }, function(error){
      //TODO: handle error
    });

    $scope.sendReport = function(event){
      event.preventDefault();
      $http({
        method: 'POST',
        url: REPORT_POST_URL,
        data: {
          'encounters' : $scope.encounters
        }
      }).then(function(response){
        console.log(response);
      }, function(error){
        console.log(error);
      });
    };
  }
})();
