(function() {
  'use strict';

  angular
  .module('red')
  .controller('CheckinCtrl', CheckinCtrl);

  /** @ngInject */
  function CheckinCtrl($scope, $http, $state, $cookies, marsAPIFactory) {
    $scope.validate = false;
    $cookies.putObject('session_colonist', undefined);

    // placeholder object for POST request to /colonist
    $scope.colonist = {};

    // fetch all jobs
    marsAPIFactory.getJobs().then(function(response){
      $scope.jobs = response.data.jobs;
    }, function(error){
      //TODO: handle error
    });

    $scope.login = function(event){
      event.preventDefault();
      if ($scope.validateForm.$invalid) {
        $scope.validate = true;
      } else {
        marsAPIFactory.newColonist($scope.colonist).then(function(response){
          $cookies.putObject('session_colonist', response.data.colonist);
          console.log(response);
          $state.go('encounters');
        });
      }
    };
  }
})();
