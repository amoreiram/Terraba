
app.controller('indexController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $scope.authentication = authService.authentication;
}]);