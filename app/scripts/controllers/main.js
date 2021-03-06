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
    $scope.todos = [];

    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo  = '';
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };
  });

