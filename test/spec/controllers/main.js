
'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mywebappApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('list should be empty at start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to list', function() {
    scope.todo = 'Test2';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should remove items from list', function() {
    scope.todos = ['Test1', 'Test2'];
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(1);
  });
});
