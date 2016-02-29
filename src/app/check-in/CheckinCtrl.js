(function() {
  'use strict';

  angular
  .module('red')
  .controller('CheckinCtrl', CheckinCtrl);

  /** @ngInject */
  function CheckinCtrl($scope, $http, $state, $cookies) {
    var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
    $scope.validate = false;
    $cookies.putObject('session_colonist', undefined);

    // placeholder object for POST request to /colonist
    $scope.colonist = {};

    // fetch all jobs
    $http({
      method: 'GET',
      url: JOBS_GET_URL
    }).then(function(response){
      $scope.jobs = response.data.jobs;
    }, function(error){
      //TODO: handle error
    });

    $scope.login = function(event){
      event.preventDefault();
      if ($scope.validateForm.$invalid) {
        $scope.validate = true;
      } else {
        $http({
          method: 'POST',
          url: COLONIST_POST_URL,
          data: {
            colonist : $scope.colonist
          }
        }).then(function(response){
          $cookies.putObject('session_colonist', response.data.colonist);
          console.log(response);
          $state.go('encounters');
        });
      }
    };
  }
})();
