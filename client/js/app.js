angular.module('easel-chat', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/logIn', { templateUrl: '/partials/logIn', controller: LogInCtrl }).
        otherwise({ redirectTo: '/logIn'});
    }]);