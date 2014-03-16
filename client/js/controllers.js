var easelControllers = angular.module('EaselControllers', []);

easelControllers.controller('LogInCtrl', ['$scope', '$location', 'UserData', function($scope, $location, UserData) {
  $scope.data = UserData;
  console.log("In Login Ctrl");

  $scope.joinGame = function() {
    console.log("tried to join game");
    console.log($scope.data);
    $location.path("/gameRoom");
  }
 }]);

easelControllers.controller('GameRoomCtrl', ['$scope', 'UserData', function($scope, UserData) {
    console.log("in gameroom");
    $scope.data = UserData;
    console.log($scope.data);
}]);
