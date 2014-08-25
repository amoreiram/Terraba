appCajaUnica.controller('ControladorDetalleSaldos', function ($scope, $http, $filter) {

  $http.get('http://www.hacienda.go.cr/cu/servicio/wssaldoscu.cshtml').success(function (datos) {
  //$http.get('http://www.hacienda.go.cr/cu/assets/data/detalle.js').success(function (datos) {
    $scope.datos = datos;        
    //$scope.fecha = new Date(parseInt(datos[0].fecha_ultima_actualizacion.substr(6)));
    $scope.fecha = datos[0].fecha_ultima_actualizacion;

    $('#spinner').hide();
    $('.angular-app').show();

    $scope.clasificaciones = _.map(_.uniq(_.map(datos, function (d) {
      return d.descripcion_valor;
    })), function (c) {
      return {
        'descripcion_valor': c
      };
    });

    $scope.clasificacion = $scope.clasificaciones[0];

    $scope.monedas = [{
      descripcion_moneda: 'COLONES'
    }, {
      descripcion_moneda: 'DOLARES'
    }];

    $scope.moneda = $scope.monedas[0];

    $scope.sum = function () {
      var total = 0;
      var filtro = $filter("filter")($scope.datos, $scope.busqueda);
      angular.forEach($filter('filter')(filtro, {
        'descripcion_moneda': $scope.moneda.descripcion_moneda,
        'descripcion_valor': $scope.clasificacion.descripcion_valor
      }, $scope.busqueda), function (d) {
        total += d.saldo_actual;
      });
      return total;
    }

    /*       $scope.$watch("busqueda", function(query){
    //         if (query > 0) {
    $scope.datos = $filter("filter")($scope.datos, query);
    //       }
    });*/
  });
});