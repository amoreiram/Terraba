
//var terrabaControllers = angular.module('loginController', []);

app.controller('loginController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    //$scope.usuarios = {};

    $scope.login = function () {

    }

    $scope.registrar = function () {
        console.log('hola');
        $http.post('http://localhost:52465/api/Account/Register', $scope.usuario).success(function (nuevo, status, headers, cfg) {
            console.log(nuevo);
            console.log(status);
            console.log(headers);
            console.log(cfg);
            $scope.tiposImputacion.push(nuevo);
        }).error(function (data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
        });

    }
}
]);