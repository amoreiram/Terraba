'use strict';
var app = angular.module('TerrabaApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/aerolineas', {
        templateUrl: '/app/views/aerolineas.html',
        controller: 'aerolineasController'
    }).when('/', {
        templateUrl: '/app/views/terraba.html'
    }).when('/login', {
        templateUrl: '/app/views/login.html',
        controller: 'usuariosController'
    }).when('/my', {
        templateUrl: '/app/views/perfil.html'
    }).when('/mensajes', {
        templateUrl: '/app/views/mensajes.html'
    }).when('/usuarios', {
        templateUrl: '/app/views/usuarios.html',
        controller: 'usuariosController'
    }).when('/formas-pago', {
        templateUrl: '/app/views/formas-pago.html',
        controller: 'formasPagoController'
    }).when('/configuracion', {
        templateUrl: '/app/views/configuracion.html'
    }).when('/ayuda', {
        templateUrl: '/app/views/ayuda.html'
    }).when('/catalogos', {
        templateUrl: '/app/views/catalogos.html',
        controller: 'catalogosController'
    }).when('/fondos', {
        templateUrl: '/app/views/fondos.html',
        controller: 'fondosController'
    }).when('/tipos-contratacion', {
        templateUrl: '/app/views/tipos-contratacion.html',
        controller: 'tiposContratacionController'
    }).when('/tipos-imputacion', {
        templateUrl: '/app/views/tipos-imputacion.html',
        controller: 'tiposImputacionController'
    }).when('/tipos-solicitud-pedido', {
        templateUrl: '/app/views/tipos-solicitud-pedido.html',
        controller: 'tiposSolicitudPedidoController'
    }).when('/tipos-imputacion-p', {
        templateUrl: '/app/views/tipos-imputacion-polymer.html',
        controller: 'tiposImputacionController'
    }).when('/solicitud-pedido', {
        templateUrl: '/app/views/solicitud-pedido.html',
        controller: 'solicitudPedidoController'
    }).when('/propuesta', {
        templateUrl: '/app/views/propuesta.html',
        controller: 'solicitudPedidoController'
    }).when('/lineas-solicitud-pedido', {
        templateUrl: '/app/views/lineas-solicitud-pedido.html',
        controller: 'lineasSolicitudPedidoController'
    }).when('/tipos-procedimiento', {
        templateUrl: '/app/views/tipos-procedimiento.html',
        controller: 'tiposProcedimientoController'
    }).when('/estados-tramite', {
        templateUrl: '/app/views/estados-tramite.html',
        controller: 'estadosTramiteController'
    }).when('/tipos-garantia-timbre', {
        templateUrl: '/app/views/tipos-garantia-timbre.html',
        controller: 'tiposGarantiaTimbreController'
    }).otherwise({
        redirectTo: '/'
    });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
});

app.run(['authService', function (authService) {
   // authService.fillAuthData();
}]);
