'use strict';

/**
 * @ngdoc function
 * @name mywebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mywebappApp
 */
angular.module('mywebappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
