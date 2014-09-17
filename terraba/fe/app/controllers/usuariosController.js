app.controller('usuariosController', ['$scope', '$http', '$location', 'authService', function ($scope, $http, $location, authService) {
    //var requestBody = "grant_type=password&username=" + $scope.loginData.username + "&password=" + $scope.loginData.password;

    authService.saludo;
    
    $http.get('http://localhost:52465/api/Accounts/').success(function (data) {
        $scope.usuarios = data;
    });

   /* $scope.login = function () {        

        var requestBody = "grant_type=password&username=" + $scope.loginData.username + "&password=" + $scope.loginData.password;

        $http.post('http://localhost:52465/token', requestBody, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (data, status, headers, cfg) {
            console.log(data);
            $location.path('/');
        });
    }*/

    $scope.login = function () {


        authService.login($scope.loginData).then(function (response) {
            $location.path('/');
        },
         function (err) {
             $scope.message = err.error_description;
         });
    };

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