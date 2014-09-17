
app.controller('indexController', ['$scope', '$http', '$location', 'authService',
function ($scope, $http, $location, authService) {
    $scope.authentication = authService.authentication;

    $scope.logOut = function () {

        authService.logOut();
        $location.path('/');

    }
}]);