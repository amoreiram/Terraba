
app.controller('tiposProcedimientoController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('http://localhost:53812/api/tiposprocedimiento').success(function (datos) {
        $scope.tiposprocedimiento = datos;
    });

    $scope.guardar = function () {
        // lodash.js - Encontrar id existente dentro de la tabla
        var f = _.find($scope.tiposprocedimiento, { id: $scope.nuevoTipoProcedimiento.id });

        if (f == undefined) { // El registro no existe
            $http.post('http://localhost:53812/api/tiposprocedimiento', $scope.nuevoTipoProcedimiento).success(function (nuevo, status, headers, cfg) {
                console.log(nuevo);
                console.log(status);
                console.log(headers);
                console.log(cfg);
                $scope.tiposprocedimiento.push(nuevo);
            }).error(function (error) {
                console.log('Error: ' + JSON.stringify(error));
            });

            $scope.fondos.push(nuevaSolicitud);

        } else { // El registro existe y se modifica
            for (i in $scope.tiposprocedimiento) {
                if ($scope.tiposprocedimiento[i].id == $scope.nuevoTipoProcedimiento.id) {
                    $http.put('http://localhost:53812/api/tiposprocedimiento/' + $scope.tiposprocedimiento[i].id, $scope.nuevoTipoProcedimiento).success(function () {

                    }).error(function (error, status) {
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(status);
                    });

                    $scope.tiposprocedimiento[i] = $scope.nuevoTipoProcedimiento;
                }
            }
        }

        $scope.nuevoTipoProcedimiento = {};
    }

    $scope.borrar = function (id) {
        for (i in $scope.tiposprocedimiento) {
            if ($scope.tiposprocedimiento[i].id == id) {
                $scope.tiposprocedimiento.splice(i, 1);
                $scope.nuevoTipoProcedimiento = {};
            }
        }
    }

    $scope.modificar = function (id) {
        window.event.preventDefault();

        for (i in $scope.tiposprocedimiento) {
            if ($scope.tiposprocedimiento[i].id == id) {
                $scope.nuevoTipoProcedimiento = angular.copy($scope.tiposprocedimiento[i]);
            }
        }
    }
}]);