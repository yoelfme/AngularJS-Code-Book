(function () {
  'use strict';

  angular.module('HelloApp', [])
    .controller('HelloController', ['$scope',  function ($scope) {
      $scope.greeting = {
        text: 'Hello'
      };
    }])
})();


