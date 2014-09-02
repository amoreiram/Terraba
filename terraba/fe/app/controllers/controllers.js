//var app = angular.module('controllers', []);

app.controller('ControladorUsuarios', ['$scope', '$http',
  function ($scope, $http) {

  }]);

app.controller('ControladorTiposContratacion', ['$scope', '$http', '$location',
  function ($scope, $http, $location) {
      $http.get('http://localhost:53812/api/tiposcontratacion').success(function (datos) {
          $scope.tiposcontratacion = datos;
      });

      $scope.guardar = function () {

          // lodash.js - Encontrar código existente dentro de la tabla
          var f = _.find($scope.tiposcontratacion, { id: $scope.nuevoTipoContratacion.id });

          if (f == undefined) { // El registro no existe
              $scope.tiposcontratacion.push($scope.nuevoTipoContratacion);
          } else { // El registro existe y se modifica

              for (i in $scope.tiposcontratacion) {
                  if ($scope.tiposcontratacion[i].id == $scope.nuevoTipoContratacion.id) {
                      $scope.tiposcontratacion[i] = $scope.nuevoTipoContratacion;
                  }
              }
          }

          $scope.nuevoTipoContratacion = {};
      }

      $scope.borrar = function (id) {
          for (i in $scope.tiposcontratacion) {
              if ($scope.tiposcontratacion[i].id == id) {
                  $scope.tiposcontratacion.splice(i, 1);
                  $scope.nuevoTipoContratacion = {};
              }
          }
      }

      $scope.modificar = function (id) {
          window.event.preventDefault();

          for (i in $scope.tiposcontratacion) {
              if ($scope.tiposcontratacion[i].id == id) {
                  $scope.nuevoTipoContratacion = angular.copy($scope.tiposcontratacion[i]);
              }
          }
      }
  }]);