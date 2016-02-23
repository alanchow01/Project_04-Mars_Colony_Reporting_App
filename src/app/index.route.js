(function() {
  'use strict';

  angular
    .module('red')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
    });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .state('check-in', {
        url: '/check-in',
        templateUrl: 'app/check-in/check-in.html',
        controller: 'CheckinCtrl'
      })
      .state('encounters', {
        url: '/encounters',
        templateUrl: 'app/encounters/encounters.html',
        controller: 'EncountersCtrl'
      })
      .state('report', {
        url: '/report',
        templateUrl: 'app/report/report.html',
        controller: 'ReportCtrl'
      })
      .state('report-filed', {
        url: '/report-filed',
        templateUrl: 'app/report/report-filed.html',
        controller: 'ReportCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
