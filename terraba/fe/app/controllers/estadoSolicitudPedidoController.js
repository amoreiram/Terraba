
app.controller('EstadosSolicitudPedidoController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('http://localhost:53812/api/estadossolicitudpedido').success(function (datos) {
        $scope.estadossolicitudpedido = datos;
    });

    $scope.guardar = function () {
        // lodash.js - Encontrar id existente dentro de la tabla
        var f = _.find($scope.estadossolicitudpedido, { id: $scope.nuevaSolicitud.id });

        if (f == undefined) { // El registro no existe
            $http.post('http://localhost:53812/api/estadossolicitudpedido', $scope.nuevaSolicitud).success(function (nuevo, status, headers, cfg) {
                console.log(nuevo);
                console.log(status);
                console.log(headers);
                console.log(cfg);
                $scope.estadossolicitudpedido.push(nuevo);
            }).error(function (error) {
                console.log('Error: ' + JSON.stringify(error));
            });

            $scope.fondos.push(nuevaSolicitud);

        } else { // El registro existe y se modifica
            for (i in $scope.estadossolicitudpedido) {
                if ($scope.estadossolicitudpedido[i].id == $scope.nuevaSolicitud.id) {
                    $http.put('http://localhost:53812/api/estadossolicitudpedido/' + $scope.estadossolicitudpedido[i].id, $scope.nuevaSolicitud).success(function () {

                    }).error(function (error, status) {
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(status);
                    });

                    $scope.estadossolicitudpedido[i] = $scope.nuevaSolicitud;
                }
            }
        }

        $scope.nuevaSolicitud = {};
    }

    $scope.borrar = function (id) {
        for (i in $scope.estadossolicitudpedido) {
            if ($scope.estadossolicitudpedido[i].id == id) {
                $scope.estadossolicitudpedido.splice(i, 1);
                $scope.nuevaSolicitud = {};
            }
        }
    }

    $scope.modificar = function (id) {
        window.event.preventDefault();

        for (i in $scope.estadossolicitudpedido) {
            if ($scope.estadossolicitudpedido[i].id == id) {
                $scope.nuevaSolicitud = angular.copy($scope.estadossolicitudpedido[i]);
            }
        }
    }
}]);