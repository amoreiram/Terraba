var terrabaApp = angular.module('terrabaApp', ['ngRoute', 'ngAnimate', 'Controladores']);

terrabaApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
        redirectTo: '/login.html'
    }).when('/', {
        templateUrl: '/app/parciales/terraba.html'
    }).when('/registrar-usuario', {
        templateUrl: '/app/parciales/registrar-usuario.html',
        controller: 'ControladorUsuarios'
    }).when('/formas-pago', {
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
    }).when('/tipos-imputacion', {
        templateUrl: '/app/parciales/tipos-imputacion.html',
        controller: 'ControladorTiposImputacion'
    }).otherwise({
        redirectTo: '/'
    });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
} ]);