(function () {
  'use strict';

  angular.module('adra')

  .controller('BeneficiaryController', ['$scope', 'api', 'socket', function ($scope, api, socket) {

    api.beneficiaries.stats().then(function (beneficiaries) {
      console.log(beneficiaries);

      $scope.data = [beneficiaries.totalDisables, beneficiaries.totalElders, beneficiaries.totalPregnants, beneficiaries.totalLactantMothers];

      console.log($scope.data);
    });

    socket.on('emit~bar', function () {
      $scope.bar = true;
    });


    //$scope.data = [2, 3, 30, 10];
    $scope.labels = ['Discapacitados', 'Ancianos', 'Madres embarazadas', 'Madres Lactantes'];



  }]);

})();
