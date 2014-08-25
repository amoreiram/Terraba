var terrabaControllers = angular.module('Controladores', []);

terrabaControllers.controller('ControladorUsuarios', ['$scope', '$http',
  function ($scope, $http) {

  } ]);

terrabaControllers.controller('ControladorFormasPago', ['$scope', '$http', '$location',
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
  } ]);

  terrabaControllers.controller('ControladorCatalogos', ['$scope', '$http', '$location',
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
  } ]);