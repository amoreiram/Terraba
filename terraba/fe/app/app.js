var terrabaApp = angular.module('terrabaApp', ['ngRoute', 'Controladores']);

terrabaApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/registrar-usuario', {
        templateUrl: '/app/parciales/registrar-usuario.html',
        controller: 'ControladorUsuarios'
    }).when('/registrar-forma-pago', {
        templateUrl: '/app/parciales/formas-pago.html',
        controller: 'ControladorFormasPago'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);