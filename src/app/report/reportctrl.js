(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $http, $filter, $cookies, $state) {
    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    $scope.validate = false;
    
    $scope.report = {
      colonist_id: $cookies.getObject('session_colonist').id,
      date: $filter('date')(new Date(), 'yyyy-MM-dd')
    };

    // can use rootScope but not ideal
    // $scope.encounters.colonist_id = $rootScope.id;

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
      if ($scope.validateForm.$invalid) {
        $scope.validate = true;
      } else {
        $http({
          method: 'POST',
          url: REPORT_POST_URL,
          data: {
            encounter : $scope.report,
          }
        }).then(function(response){
          // $cookies.putObject('colonist_action', response.data.aliens);
          $state.go('encounters');
          console.log(response);
        }, function(error){
          $state.go('encounters');
          console.log(error);
        });
      }

    };
  }
})();
