

app.controller('formasPagoController', ['$scope', '$http', '$location',
  function ($scope, $http, $location) {
      $http.get('http://localhost:53812/api/formaspago').success(function (datos) {
          $scope.formasPago = datos;
      });

      $scope.guardar = function () {
          /*_.find($scope.formasPago, function (f) {
          return f.id == $scope.nuevaFormaPago.id;
          });*/

          // lodash.js - Encontrar código existente dentro de la tabla
          var f = _.find($scope.formasPago, { id: $scope.nuevaFormaPago.id });

          if (f == undefined) { // El registro no existe
              $scope.formasPago.push($scope.nuevaFormaPago);
          } else { // El registro existe y se modifica
              for (i in $scope.formasPago) {
                  if ($scope.formasPago[i].id == $scope.nuevaFormaPago.id) {
                      $scope.formasPago[i] = $scope.nuevaFormaPago;
                  }
              }
          }

          $scope.nuevaFormaPago = {};
      }

      $scope.borrar = function (id) {
          for (i in $scope.formasPago) {
              if ($scope.formasPago[i].id == id) {
                  $scope.formasPago.splice(i, 1);
                  $scope.nuevaFormaPago = {};
              }
          }
      }

      $scope.modificar = function (id) {
          window.event.preventDefault();

          for (i in $scope.formasPago) {
              if ($scope.formasPago[i].id == id) {
                  $scope.nuevaFormaPago = angular.copy($scope.formasPago[i]);
              }
          }
      }
  }]);