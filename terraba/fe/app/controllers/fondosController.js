
app.controller('fondosController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('http://localhost:53812/api/fondos/').success(function (datos) {
        $scope.fondos = datos;
    });

    $scope.guardar = function () {
        // lodash.js - Encontrar id existente dentro de la tabla
        var f = _.find($scope.fondos, { id: $scope.nuevoFondo.id });

        if (f == undefined) { // El registro no existe
            $http.post('http://localhost:53812/api/fondos/', $scope.nuevoFondo).success(function (nuevo, status, headers, cfg) {
                console.log(nuevo);
                console.log(status);
                console.log(headers);
                console.log(cfg);
                $scope.fondos.push(nuevo);
            }).error(function (error) {
                console.log('Error: ' + JSON.stringify(error));
            });

            $scope.fondos.push(nuevoFondo);

        } else { // El registro existe y se modifica
            for (i in $scope.fondos) {
                if ($scope.fondos[i].id == $scope.nuevoFondo.id) {
                    $http.put('http://localhost:53812/api/fondos/' + $scope.fondos[i].id, $scope.nuevoFondo).success(function () {

                    }).error(function (error, status) {
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(status);
                    });

                    $scope.fondos[i] = $scope.nuevoFondo;
                }
            }
        }

        $scope.nuevoFondo = {};
    }

    $scope.borrar = function (id) {
        for (i in $scope.catalogos) {
            if ($scope.catalogos[i].id == id) {
                $scope.catalogos.splice(i, 1);
                $scope.nuevoCatalogo = {};
            }
        }
    }

    $scope.modificar = function (id) {
        window.event.preventDefault();

        for (i in $scope.fondos) {
            if ($scope.fondos[i].id == id) {
                $scope.nuevoFondo = angular.copy($scope.fondos[i]);
            }
        }
    }
}]);