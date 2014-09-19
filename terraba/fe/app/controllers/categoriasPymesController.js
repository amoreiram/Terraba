app.controller('CategoriasPymesController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('http://localhost:53812/api/categoriaspymes').success(function (datos) {
        $scope.categoriaspymes = datos;
    });    

    $scope.guardar = function () {
        // lodash.js - Encontrar id existente dentro de la tabla
        var f = _.find($scope.categoriaspymes, { id: $scope.nuevaCategoria.id });

        if (f == undefined) { // El registro no existe
            $http.post('http://localhost:53812/api/categoriaspymes', $scope.nuevaCategoria).success(function (nuevo, status, headers, cfg) {
                console.log(nuevo);
                console.log(status);
                console.log(headers);
                console.log(cfg);
                $scope.categoriaspymes.push(nuevo);
            }).error(function (error) {
                console.log('Error: ' + JSON.stringify(error));
            });

            $scope.fondos.push(nuevaSolicitud);

        } else { // El registro existe y se modifica
            for (i in $scope.categoriaspymes) {
                if ($scope.categoriaspymes[i].id == $scope.nuevaCategoria.id) {
                    $http.put('http://localhost:53812/api/categoriaspymes/' + $scope.categoriaspymes[i].id, $scope.nuevaCategoria).success(function () {

                    }).error(function (error, status) {
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(status);
                    });

                    $scope.categoriaspymes[i] = $scope.nuevaCategoria;
                }
            }
        }

        $scope.nuevaCategoria = {};
    }

    $scope.borrar = function (id) {
        for (i in $scope.categoriaspymes) {
            if ($scope.categoriaspymes[i].id == id) {
                $scope.categoriaspymes.splice(i, 1);
                $scope.nuevaCategoria = {};
            }
        }
    }

    $scope.modificar = function (id) {
        window.event.preventDefault();

        for (i in $scope.categoriaspymes) {
            if ($scope.categoriaspymes[i].id == id) {
                $scope.nuevaCategoria = angular.copy($scope.categoriaspymes[i]);
            }
        }
    }
}]);