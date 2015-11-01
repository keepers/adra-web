(function () {
  'use strict';

  angular.module('adra', ['adra-api', 'ui.router', 'chart.js'])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: '../views/partials/beneficiary.html',
        controller: 'BeneficiaryController as Ctrl'
      });
  });

})();

