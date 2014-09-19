
app.controller('tiposGarantiaTimbreController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('http://localhost:53812/api/tiposgarantiatimbre').success(function (datos) {
        $scope.tiposgarantiatimbre = datos;
    });

    $scope.guardar = function () {
        // lodash.js - Encontrar id existente dentro de la tabla
        var f = _.find($scope.tiposgarantiatimbre, { id: $scope.nuevoTipoGarantiaTimbre.id });

        if (f == undefined) { // El registro no existe
            $http.post('http://localhost:53812/api/tiposgarantiatimbre', $scope.nuevoTipoGarantiaTimbre).success(function (nuevo, status, headers, cfg) {
                console.log(nuevo);
                console.log(status);
                console.log(headers);
                console.log(cfg);
                $scope.tiposgarantiatimbre.push(nuevo);
            }).error(function (error) {
                console.log('Error: ' + JSON.stringify(error));
            });

            $scope.fondos.push(nuevaSolicitud);

        } else { // El registro existe y se modifica
            for (i in $scope.tiposgarantiatimbre) {
                if ($scope.tiposgarantiatimbre[i].id == $scope.nuevoTipoGarantiaTimbre.id) {
                    $http.put('http://localhost:53812/api/tiposgarantiatimbre/' + $scope.tiposgarantiatimbre[i].id, $scope.nuevoTipoGarantiaTimbre).success(function () {

                    }).error(function (error, status) {
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(status);
                    });

                    $scope.tiposgarantiatimbre[i] = $scope.nuevoTipoGarantiaTimbre;
                }
            }
        }

        $scope.nuevoTipoGarantiaTimbre = {};
    }

    $scope.borrar = function (id) {
        for (i in $scope.tiposgarantiatimbre) {
            if ($scope.tiposgarantiatimbre[i].id == id) {
                $scope.tiposgarantiatimbre.splice(i, 1);
                $scope.nuevoTipoGarantiaTimbre = {};
            }
        }
    }

    $scope.modificar = function (id) {
        window.event.preventDefault();

        for (i in $scope.tiposgarantiatimbre) {
            if ($scope.tiposgarantiatimbre[i].id == id) {
                $scope.nuevoTipoGarantiaTimbre = angular.copy($scope.tiposgarantiatimbre[i]);
            }
        }
    }
}]);