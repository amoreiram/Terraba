
app.controller('tiposSolicitudPedidoController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('http://localhost:53812/api/tipossolicitudpedido').success(function (datos) {
        $scope.tiposSolicitudPedido = datos;
    });

    $scope.tiposImputacion = [{
        id: 1,
        codigo: 'C',
        descripcion: 'Centro Gestor'
    },
    {
        id: 2,
        codigo: 'T',
        descripcion: 'Cuentas especiales'
    }];

    $scope.guardar = function () {
        // lodash.js - Encontrar id existente dentro de la tabla
        var f = _.find($scope.tiposSolicitudPedido, { id: $scope.nuevoTipoSolicitudPedido.id });

        if (f == undefined) { // El registro no existe
            $scope.nuevoTipoSolicitudPedido.idTipoImputacion = $scope.nuevoTipoSolicitudPedido.tipoImputacion.id;

            $http.post('http://localhost:53812/api/tipossolicitudpedido', $scope.nuevoTipoSolicitudPedido).success(function (nuevo, status, headers, cfg) {
                console.log(nuevo);
                console.log(status);
                console.log(headers);
                console.log(cfg);
                $scope.tiposSolicitudPedido.push(nuevo);
            }).error(function (error) {
                console.log('Error: ' + JSON.stringify(error));
            });

           // $scope.tiposSolicitudPedido.push(nuevo);

        } else { // El registro existe y se modifica
            for (i in $scope.tiposSolicitudPedido) {
                if ($scope.tiposImputacion[i].id == $scope.nuevoTipoSolicitudPedido.id) {
                    $http.put('http://localhost:53812/api/tipossolicitudpedido/' + $scope.tiposSolicitudPedido[i].id, $scope.nuevoTipoSolicitudPedido).success(function () {

                    }).error(function (error, status) {
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(status);
                    });

                    $scope.tiposSolicitudPedido[i] = $scope.nuevoTipoSolicitudPedido;
                }
            }
        }

        $scope.nuevoTipoSolicitudPedido = {};
    }

    $scope.borrar = function (id) {
        for (i in $scope.tiposSolicitudPedido) {
            if ($scope.tiposSolicitudPedido[i].id == id) {
                $scope.tiposSolicitudPedido.splice(i, 1);
                $scope.nuevoTipoSolicitudPedido = {};
            }
        }
    }

    $scope.modificar = function (id) {
        window.event.preventDefault();

        for (i in $scope.tiposSolicitudPedido) {
            if ($scope.tiposSolicitudPedido[i].id == id) {
                $scope.nuevoTipoSolicitudPedido = angular.copy($scope.tiposSolicitudPedido[i]);
            }
        }
    }

    $scope.establecerTipo = function () {
        var t = _.find($scope.tiposImputacion, { id: $scope.nuevoTipoSolicitudPedido.idTipoImputacion });
        $scope.nuevoTipoSolicitudPedido.tipoImputacion = t;    
    }
}]);