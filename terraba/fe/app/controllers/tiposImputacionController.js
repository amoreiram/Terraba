
app.controller('tiposImputacionController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('/datos/tiposimputacion.txt').success(function (datos) {
        $scope.tiposImputacion = datos;
    });

    $scope.guardar = function () {
        // lodash.js - Encontrar id existente dentro de la tabla
        var f = _.find($scope.tiposImputacion, { id: $scope.nuevoTipoImputacion.id });

        if (f == undefined) { // El registro no existe
            /*$http.post('/datos/tiposimputacion', $scope.nuevoTipoImputacion).success(function (nuevo, status, headers, cfg) {
                console.log(nuevo);
                console.log(status);
                console.log(headers);
                console.log(cfg);
                $scope.tiposImputacion.push(nuevo);
            }).error(function (error) {
                console.log('Error: ' + JSON.stringify(error));
            });*/
            $scope.tiposImputacion.push(nuevo);

        } else { // El registro existe y se modifica
            for (i in $scope.tiposImputacion) {
                if ($scope.tiposImputacion[i].id == $scope.nuevoTipoImputacion.id) {
                    /*                    $http.put('http://localhost:53812/api/tiposimputacion/' +  $scope.tiposImputacion[i].id, $scope.nuevoTipoImputacion).success(function () {
                                            
                                        }).error(function (error, status) {
                                            console.log('Error: ' + JSON.stringify(error));
                                            console.log(status);
                                        });*/

                    $scope.tiposImputacion[i] = $scope.nuevoTipoImputacion;
                }
            }
        }

        $scope.nuevoTipoImputacion = {};
    }

    $scope.borrar = function (id) {
        for (i in $scope.tiposImputacion) {
            if ($scope.tiposImputacion[i].id == id) {
                $scope.tiposImputacion.splice(i, 1);
                $scope.nuevoTipoImputacion = {};
            }
        }
    }

    $scope.modificar = function (id) {
        window.event.preventDefault();

        for (i in $scope.tiposImputacion) {
            if ($scope.tiposImputacion[i].id == id) {
                $scope.nuevoTipoImputacion = angular.copy($scope.tiposImputacion[i]);
            }
        }
    }
}]);