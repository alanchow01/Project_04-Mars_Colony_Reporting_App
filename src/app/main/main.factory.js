(function() {
  'use strict';

  angular
  .module('red')
  .factory('marsAPIFactory', marsAPIFactory);

  function marsAPIFactory($http) {
    var REPORTS_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

    return {
       getEncounters: function() {
        return $http({
            method: 'GET',
            url: REPORTS_URL
          });
      },
      getReport: function() {
        return $http({
          method: 'GET',
          url: ALIENS_GET_URL
        });
    },
    postReport: function(reportList) {
      return $http({
        method: 'POST',
        url: REPORTS_URL,
        data: {
          encounter : reportList,
        }
      });
    },
    getJobs: function() {
      return $http({
        method: 'GET',
        url: JOBS_GET_URL
      });
    },
    newColonist: function(newPerson) {
      return $http({
        method: 'POST',
        url: COLONIST_POST_URL,
        data: {
          colonist : newPerson
        }
      });
    }
  };
}
  // return marsAPIFactory;
})();
