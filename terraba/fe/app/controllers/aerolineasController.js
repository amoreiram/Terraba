
app.controller('aerolineasController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('http://localhost:53812/api/aerolineas').success(function (datos) {
        $scope.aerolineas = datos;
    });

    $scope.guardar = function () {
        // lodash.js - Encontrar id existente dentro de la tabla
        var f = _.find($scope.aerolineas, { id: $scope.nuevaAerolinea.id });

        if (f == undefined) { // El registro no existe
            $http.post('http://localhost:53812/api/aerolineas', $scope.nuevaAerolinea).success(function (nuevo, status, headers, cfg) {
                console.log(nuevo);
                console.log(status);
                console.log(headers);
                console.log(cfg);
                $scope.aerolineas.push(nuevo);
            }).error(function (error) {
                console.log('Error: ' + JSON.stringify(error));
            });

            $scope.aerolineas.push(nuevo);

        } else { // El registro existe y se modifica
            for (i in $scope.aerolineas) {
                if ($scope.aerolineas[i].id == $scope.nuevaAerolinea.id) {
                    $http.put('http://localhost:53812/api/aerolineas/' + $scope.aerolineas[i].id, $scope.nuevaAerolinea).success(function () {

                    }).error(function (error, status) {
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(status);
                    });

                    $scope.aerolineas[i] = $scope.nuevaAerolinea;
                }
            }
        }

        $scope.nuevaAerolinea = {};
    }

    $scope.borrar = function (id) {
        for (i in $scope.aerolineas) {
            if ($scope.aerolineas[i].id == id) {
                $scope.aerolineas.splice(i, 1);
                $scope.nuevaAerolinea = {};
            }
        }
    }

    $scope.modificar = function (id) {
        window.event.preventDefault();

        for (i in $scope.aerolineas) {
            if ($scope.aerolineas[i].id == id) {
                $scope.nuevaAerolinea = angular.copy($scope.aerolineas[i]);
            }
        }
    }
}]);