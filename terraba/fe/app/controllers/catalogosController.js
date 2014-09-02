
app.controller('catalogosController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('http://localhost:53812/api/catalogo').success(function (datos) {
        $scope.catalogos = datos;
    });

    $scope.guardar = function () {
        /*_.find($scope.formasPago, function (f) {
        return f.id == $scope.nuevaFormaPago.id;
        });*/

        // lodash.js - Encontrar código existente dentro de la tabla
        var f = _.find($scope.catalogos, { id: $scope.nuevoCatalogo.id });

        if (f == undefined) { // El registro no existe
            $scope.catalogos.push($scope.nuevoCatalogo);
        } else { // El registro existe y se modifica
            for (i in $scope.catalogos) {
                if ($scope.catalogos[i].id == $scope.nuevoCatalogo.id) {
                    $scope.catalogos[i] = $scope.nuevoCatalogo;
                }
            }
        }

        $scope.nuevoCatalogo = {};
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

        for (i in $scope.catalogos) {
            if ($scope.catalogos[i].id == id) {
                $scope.nuevoCatalogo = angular.copy($scope.catalogos[i]);
            }
        }
    }
}]);