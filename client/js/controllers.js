var easelControllers = angular.module('EaselControllers', ['EaselServices']);

easelControllers.controller('LogInCtrl', ['$scope', '$location', 'UserData', function($scope, $location, UserData) {
  $scope.data = UserData;
  console.log("In Login Ctrl");

  $scope.joinGame = function() {
    console.log("tried to join game");
    console.log($scope.data);
    $location.path("/gameRoom");
  }
 }]);

easelControllers.controller('GameRoomCtrl', ['$scope', 'UserData', 'Socket', function($scope, UserData, Socket) {
    console.log("connected");

    console.log("in gameroom");
    $scope.data = UserData;
    Socket.emit('joinGame', UserData);
    console.log($scope.data);
    Socket.on('updateUserList', function(data) {
        console.log("got userUpdateList");
        $scope.userList = data;
    });

    $scope.messageList = [];
    $scope.sendMessage = function() {
        console.log("sending message " + $scope.inputData.message);
        var message = {
            message: $scope.inputData.message,
            gameName: $scope.data.gameName
        }
        Socket.emit('sendMessage', message);
    }

    Socket.on('recieveMessage', function(data) {
        $scope.messageList.push(data);
    });
}]);
