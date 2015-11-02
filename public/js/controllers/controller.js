(function () {
  'use strict';

  angular.module('adra')

  .controller('BeneficiaryController', ['$scope', 'api', 'socket', function ($scope, api, socket) {

    api.beneficiaries.stats().then(function (beneficiaries) {
      $scope.data = [beneficiaries.totalDisables, beneficiaries.totalElders, beneficiaries.totalPregnants, beneficiaries.totalLactantMothers];
    });

    socket.on('stats', function (beneficiaries) {
      $scope.data = [beneficiaries.totalDisables, beneficiaries.totalElders, beneficiaries.totalPregnants, beneficiaries.totalLactantMothers];
    });

    $scope.labels = ['Discapacitados', 'Ancianos', 'Madres embarazadas', 'Madres Lactantes'];

  }]);

})();
