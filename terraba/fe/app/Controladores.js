var terrabaControllers = angular.module('Controladores', []);

terrabaControllers.controller('ControladorUsuarios', ['$scope', '$http',
  function ($scope, $http) {

  }]);

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
  }]);

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
}]);

terrabaControllers.controller('ControladorTiposContratacion', ['$scope', '$http', '$location',
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

terrabaControllers.controller('ControladorTiposImputacion', ['$scope', '$http', '$location',
function ($scope, $http, $location) {
    $http.get('http://localhost:53812/api/tiposimputacion').success(function (datos) {
        $scope.tiposImputacion = datos;
    });

    $scope.guardar = function () {
        // lodash.js - Encontrar id existente dentro de la tabla
        var f = _.find($scope.tiposImputacion, { id: $scope.nuevoTipoImputacion.id });

        if (f == undefined) { // El registro no existe
            $http.post('http://localhost:53812/api/tiposimputacion', $scope.nuevoTipoImputacion).success(function (nuevo, status) {                
                console.log(nuevo);
                console.log(status);
                $scope.tiposImputacion.push(nuevo);
            }).error(function (error) {
                console.log('Error: ' + JSON.stringify(error));
            });

        } else { // El registro existe y se modifica
            for (i in $scope.tiposImputacion) {
                if ($scope.tiposImputacion[i].id == $scope.nuevoTipoImputacion.id) {
                    $http.put('http://localhost:53812/api/tiposimputacion/' +  $scope.tiposImputacion[i].id, $scope.nuevoTipoImputacion).success(function () {
                        
                    }).error(function (error, status) {
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(status);
                    });

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