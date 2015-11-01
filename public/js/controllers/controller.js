(function () {
  'use strict';

  angular.module('adra')

  .controller('BeneficiaryController', ['$scope', 'api', function ($scope, api) {


    $scope.data = [0, 0, 0, 0];
    $scope.labels = ['Discapacitados', 'Ancianos', 'Madres embarazadas', 'Madres Lactantes'];

    api.beneficiary.find().then(function (beneficiaries) {

      beneficiaries.forEach(function (beneficiary) {
        $scope.data[0] = $scope.data[0] + beneficiary.disables;
        $scope.data[1] = $scope.data[1] + beneficiary.elders;
        $scope.data[2] = $scope.data[2] + beneficiary.pregnant;
        $scope.data[3] = $scope.data[3] + beneficiary.lactantsMothers;
      });
    });


  }]);

})();
