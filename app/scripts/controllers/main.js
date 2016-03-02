'use strict';

/**
 * @ngdoc function
 * @name productScoresApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productScoresApp
 */
angular.module('productScoresApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
