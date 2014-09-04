
app.controller('usuariosController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {    
    
    $http.get('http://localhost:52465/api/Accounts/').success(function (data) {
        $scope.usuarios = data;
    });

    $scope.login = function () {
        $http.post('http://localhost:52465/token', $scope.loginData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (data, status, headers, cfg) {
            console.log(data);
        });
        console.log($scope.loginData);
    }

    $scope.guardar = function () {        
        $http.post('http://localhost:52465/api/Accounts/Register', $scope.usuario).success(function (nuevo, status, headers, cfg) {
            //console.log(nuevo);
            console.log(status);
            //console.log(headers);
            //console.log(cfg);
            $scope.usuarios.push(nuevo);
        }).error(function (data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
        });

    }
}
]);