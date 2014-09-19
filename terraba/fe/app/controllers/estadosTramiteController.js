
app.controller('estadosTramiteController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('http://localhost:53812/api/estadostramite').success(function (datos) {
        $scope.estadostramite = datos;
    });

    $scope.guardar = function () {
        // lodash.js - Encontrar id existente dentro de la tabla
        var f = _.find($scope.estadostramite, { id: $scope.nuevoEstadoTramite.id });

        if (f == undefined) { // El registro no existe
            $http.post('http://localhost:53812/api/estadostramite', $scope.nuevoEstadoTramite).success(function (nuevo, status, headers, cfg) {
                console.log(nuevo);
                console.log(status);
                console.log(headers);
                console.log(cfg);
                $scope.estadostramite.push(nuevo);
            }).error(function (error) {
                console.log('Error: ' + JSON.stringify(error));
            });

            $scope.fondos.push(nuevaSolicitud);

        } else { // El registro existe y se modifica
            for (i in $scope.estadostramite) {
                if ($scope.estadostramite[i].id == $scope.nuevoEstadoTramite.id) {
                    $http.put('http://localhost:53812/api/estadostramite/' + $scope.estadostramite[i].id, $scope.nuevoEstadoTramite).success(function () {

                    }).error(function (error, status) {
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(status);
                    });

                    $scope.estadostramite[i] = $scope.nuevoEstadoTramite;
                }
            }
        }

        $scope.nuevoEstadoTramite = {};
    }

    $scope.borrar = function (id) {
        for (i in $scope.estadostramite) {
            if ($scope.estadostramite[i].id == id) {
                $scope.estadostramite.splice(i, 1);
                $scope.nuevoEstadoTramite = {};
            }
        }
    }

    $scope.modificar = function (id) {
        window.event.preventDefault();

        for (i in $scope.estadostramite) {
            if ($scope.estadostramite[i].id == id) {
                $scope.nuevoEstadoTramite = angular.copy($scope.estadostramite[i]);
            }
        }
    }
}]);