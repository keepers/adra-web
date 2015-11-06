(function () {
  'use strict';

  angular.module('adra')

  .controller('BeneficiaryController', ['$scope', 'api', 'socket', function ($scope, api, socket) {

    $scope.data = [];
    $scope.labels = [];

    $scope.options = {
      animateRotate: true
    };

    var generateGraph = function(beneficiaries){
      for (var key in beneficiaries) {
        if (beneficiaries.hasOwnProperty(key) && key !== '_id') {
          $scope.data.push(beneficiaries[key]);
          $scope.labels.push(key);
        }
      }
    };

    api.beneficiaries.stats().then(function (beneficiaries) {
      generateGraph(beneficiaries);
    });

    socket.on('stats', function (beneficiaries) {
      $scope.options.animateRotate = false;
      generateGraph(beneficiaries[0]);
    });

  }]);

})();
