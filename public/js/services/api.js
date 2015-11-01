(function () {
  'use strict';

  angular.module('adra-api', [])

  .service('api', ['$http', function ($http) {

    var apiUrl = 'http://localhost:9090';

    this.beneficiary = {
      find: function () {
        return $http.get(apiUrl + '/beneficiary').then(function (res) {
          return res.data;
        });
      }
    };

  }]);

})();



