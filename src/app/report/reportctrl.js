(function() {
  'use strict';

  angular
  .module('red')
  .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $http, $filter, $cookies, $state, marsAPIFactory) {
    $scope.validate = false;
    $scope.userInfo = {
      name: $cookies.getObject('session_colonist').name,
      job: $cookies.getObject('session_colonist').job.name
    };

    $scope.report = {
      colonist_id: $cookies.getObject('session_colonist').id,
      date: $filter('date')(new Date(), 'yyyy-MM-dd')
    };

    // fetch all jobs
    marsAPIFactory.getReport().then(function(response){
      $scope.aliens = response.data.aliens;
    }, function(error){
      //TODO: handle error
    });

    $scope.sendReport = function(event){
      event.preventDefault();
      if ($scope.validateForm.$invalid) {
        $scope.validate = true;
      } else {
        marsAPIFactory.postReport($scope.report).then(function(response){
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
