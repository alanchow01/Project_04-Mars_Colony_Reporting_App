(function() {
  'use strict';

  angular
  .module('red')
  .controller('CheckinCtrl', CheckinCtrl);

  /** @ngInject */
  function CheckinCtrl($scope, $http) { //$http makes any kind of HTTP request (i.e. JSON)
    var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
    $scope.validate = false;

    // placeholder object for POST request to /colonist
    $scope.colonist = {};

    // fetch all jobs
    $http({
      method: 'GET',
      url: JOBS_GET_URL
    }).then(function(response){
      $scope.jobs = response.data.jobs; //assigns JSON object to 'jobs' in ng-repeat
    }, function(error){
      //TODO: handle error
    });


    // $scope.validCheck = function(){
    //   if ($scope.registrationform.name > $scope.minlength) {
    //     $scope.validate = true;
    //   }
    // };

    $scope.checkValid = function() {
      if ($scope.validate && $scope.colonist.name.length) {
        $scope.validate = false;
      }
    };

    $scope.login = function(event){
      event.preventDefault();
      if($scope.registrationform.$valid) {
        $scope.validate = true;
        console.log('went through');
      } else {
        console.log('errored out');
        $scope.validate = false;
      }
      if($scope.validate) {
        $scope.validate = false;
      } else {
        $scope.validate = true;
      }
      $http({
        method: 'POST',
        url: COLONIST_POST_URL,
        data: {
          'colonist' : $scope.colonist
        }
      }).then(function(response){
        console.log(response);
      }, function(error){
        console.log(error);
      });
    };
  }


})();
