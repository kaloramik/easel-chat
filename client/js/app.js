var easelApp = angular.module('easel-chat', ['EaselControllers', 'ngRoute']);

easelApp.factory('UserData', function() {
    return {userName: "", gameName: ""};
});

easelApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/logIn', { templateUrl: '/partials/logIn', controller: 'LogInCtrl' }).
        when('/gameRoom', { templateUrl: '/partials/gameRoom', controller: 'GameRoomCtrl' }).
        otherwise({ redirectTo: '/logIn'});
    }]);

