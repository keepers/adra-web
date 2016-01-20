(function () {
  'use strict';

  angular.module('adra-api', [])

  //@TODO: Implement gulp task to get process.env.API_URL
  // and generate a service / constant
  .constant('apiPath', 'http://localhost:9090')
  //.constant('apiPath', 'https://adra-api.herokuapp.com')

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



