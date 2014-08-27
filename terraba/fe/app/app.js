var terrabaApp = angular.module('terrabaApp', ['ngRoute', 'Controladores']);

terrabaApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/app/parciales/terraba.html'
    }).when('/registrar-usuario', {
        templateUrl: '/app/parciales/registrar-usuario.html',
        controller: 'ControladorUsuarios'
    }).when('/registrar-forma-pago', {
        templateUrl: '/app/parciales/formas-pago.html',
        controller: 'ControladorFormasPago'
    }).when('/configuracion', {
        templateUrl: '/app/parciales/configuracion.html'
    }).when('/ayuda', {
        templateUrl: '/app/parciales/ayuda.html'
    }).when('/catalogos', {
        templateUrl: '/app/parciales/catalogos.html',
        controller: 'ControladorCatalogos'
    }).when('/tipos-contratacion', {
        templateUrl: '/app/parciales/tipos-contratacion.html',
        controller: 'ControladorTiposContratacion'
    }).otherwise({
        redirectTo: '/'
    });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
} ]);