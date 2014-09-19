
app.controller('UnidadesMedidaController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('http://localhost:53812/api/unidadesmedida').success(function (datos) {
        $scope.unidadesmedida = datos;
    });

    $scope.guardar = function () {
        // lodash.js - Encontrar id existente dentro de la tabla
        var f = _.find($scope.unidadesmedida, { id: $scope.nuevaUnidad.id });

        if (f == undefined) { // El registro no existe
            $http.post('http://localhost:53812/api/unidadesmedida', $scope.nuevaUnidad).success(function (nuevo, status, headers, cfg) {
                console.log(nuevo);
                console.log(status);
                console.log(headers);
                console.log(cfg);
                $scope.unidadesmedida.push(nuevo);
            }).error(function (error) {
                console.log('Error: ' + JSON.stringify(error));
            });

            $scope.fondos.push(nuevaUnidad);

        } else { // El registro existe y se modifica
            for (i in $scope.unidadesmedida) {
                if ($scope.unidadesmedida[i].id == $scope.nuevaUnidad.id) {
                    $http.put('http://localhost:53812/api/unidadesmedida/' + $scope.unidadesmedida[i].id, $scope.nuevaUnidad).success(function () {

                    }).error(function (error, status) {
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(status);
                    });

                    $scope.unidadesmedida[i] = $scope.nuevaUnidad;
                }
            }
        }

        $scope.nuevaUnidad = {};
    }

    $scope.borrar = function (id) {
        for (i in $scope.unidadesmedida) {
            if ($scope.unidadesmedida[i].id == id) {
                $scope.unidadesmedida.splice(i, 1);
                $scope.nuevaUnidad = {};
            }
        }
    }

    $scope.modificar = function (id) {
        window.event.preventDefault();

        for (i in $scope.unidadesmedida) {
            if ($scope.unidadesmedida[i].id == id) {
                $scope.nuevaUnidad = angular.copy($scope.unidadesmedida[i]);
            }
        }
    }

    $scope.ordenarPor = function (orden) {
        $scope.ordenSeleccionado = orden;
    };
}]);