var terrabaApp = angular.module('terrabaApp', ['ngRoute', 'Controladores']);

terrabaApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/registrar-usuario', {
        templateUrl: '/app/parciales/registrar-usuario.html',
        controller: 'ControladorUsuarios'
    })//.
    //otherwise({
    //    redirectTo: '/'
    //});
}]);