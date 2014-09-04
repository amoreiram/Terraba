
app.controller('solicitudPedidoController', ['$scope', '$http', '$location',
function ($scope, $http, $location) {

    $scope.tiposSolicitud = [
        { nombre: 'Canje Mixto' },
        { nombre: 'General' },
        { nombre: 'Canje puro' }
    ];

    $scope.monedas = [
       { descripcion: 'Colón costarricense' },
       { descripcion: 'Dólar estadounidense' }
    ];

    $scope.fondos = [
       { descripcion: 'Ordinario' },
       { descripcion: 'Extraordinario' },
       { descripcion: 'Especial' }
    ];

    $scope.gruposCompra = [
       { descripcion: 'Grupo de compra 1' },
       { descripcion: 'Grupo de compra 2' },
       { descripcion: 'Grupo de compra 3' }
    ];

    $scope.organizacionesCompra = [
       { descripcion: 'Organización de compra 1' },
       { descripcion: 'Organización de compra 2' },
       { descripcion: 'Organización de compra 3' }
    ];

    $scope.programas = [
  {
      "descripcion": "132 - ADMINISTRACIÓN SUPERIOR"
  },
  {
      "descripcion": "134 - ADMINISTRACIÓN DE INGRESOS"
  },
  {
      "descripcion": "135 - TRIBUNALES FISCAL Y ADUANERO"
  },
  {
      "descripcion": "136 - ADMINISTRACIÓN FINANCIERA"
  },
  {
      "descripcion": "138 - SERVICIOS HACENDARIOS"
  }
    ];

    $scope.subprogramas = [
  {
      "descripcion": "01 - ADMINISTRACIÓN TECNOLÓGICA"
  },
  {
      "descripcion": "01 - TRIBUNAL FISCAL ADMINISTRATIVO"
  },
  {
      "descripcion": "02 - CENTRO DE  INVESTIGACIÓN Y FORMACIÓN  HACENDARIA"
  },
  {
      "descripcion": "02 - DIRECCIÓN Y COORDINACIÓN DEL PROCESO PRESUPUESTARIO DEL SECTOR PÚBLICO"
  },
  {
      "descripcion": "02 - GESTIÓN DE INGRESOS INTERNOS"
  },
  {
      "descripcion": "02 - TRIBUNAL ADUANERO"
  },
  {
      "descripcion": "03 - DIRECCIÓN DE ADMINISTRACIÓN DE BIENES Y CONTRATACIÓN ADMINISTRATIVA"
  },
  {
      "descripcion": "03 - GESTIÓN ADUANERA"
  },
  {
      "descripcion": "04 - ASESORÍA HACENDARIA"
  },
  {
      "descripcion": "04 - GESTIÓN DE CAJA DEL GOBIERNO CENTRAL"
  },
  {
      "descripcion": "05 - INVESTIGACIONES FISCALES"
  },
  {
      "descripcion": "05 - REGULACIÓN Y REGISTRO CONTABLE DE LA HACIENDA PUBLICA"
  },
  {
      "descripcion": "06 - DIRECCIÓN GENERAL DE CRÉDITO PÚBLICO"
  }
    ];

    $scope.guardar = function () {
    }
}]);