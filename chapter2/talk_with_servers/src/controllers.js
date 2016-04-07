(function () {
  'use strict';

  var app = angular.module('TalkServers', [])

  app.controller('ShoppingController', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/users')
      .success(function (data, status, headers, config) {
        $scope.users = data
      })
  }])
})();
