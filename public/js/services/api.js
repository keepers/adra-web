(function () {
  'use strict';

  angular.module('adra-api', [])

  .constant('apiPath', 'http://localhost:9090')

  .factory('socket', ['socketFactory', 'apiPath', function (socketFactory, apiPath) {
    return socketFactory({
      prefix: 'emit~',
      ioSocket: io.connect(apiPath)
    });
  }])

  .service('api', ['$http', 'apiPath', function ($http, apiPath) {
    this.beneficiaries = {
      find: function () {
        return $http.get(apiPath + '/beneficiary').then(function (res) {
          return res.data;
        });
      },
      stats: function () {
        return $http.get(apiPath + '/beneficiary/stats').then(function (res) {
          return res.data[0];
        });
      }
    };

  }]);

})();



