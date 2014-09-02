
var app = angular.module('TerrabaApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/app/views/terraba.html'
    }).when('/login', {
        templateUrl: '/app/views/registrar-usuario.html',
        controller: 'loginController'
    }).when('/my', {
        templateUrl: '/app/views/perfil.html'
    }).when('/mensajes', {
        templateUrl: '/app/views/mensajes.html'
    }).when('/registrar-usuario', {
        templateUrl: '/app/views/registrar-usuario.html'
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
    }).when('/tipos-contratacion', {
        templateUrl: '/app/views/tipos-contratacion.html',
        controller: 'tiposContratacionController'
    }).when('/tipos-imputacion', {
        templateUrl: '/app/views/tipos-imputacion.html',
        controller: 'tiposImputacionController'
    }).otherwise({
        redirectTo: '/'
    });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
});

app.factory('authService', [function ($http) {
    var user;

    function login(username, password) {
        var deferred = $q.defer();

        $http.post("/api/login", {
            userName: userName,
            password: password
        }).then(function (result) {
            userInfo = {
                accessToken: result.data.access_token,
                userName: result.data.userName
            };
            $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
            deferred.resolve(userInfo);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        establerUsuario: function (u) {
            user = u;
        },

        isAuth: function () {
            return (user) ? user : false;
        }
    }
}]);

//app.run(['authService', function (authService) {
////    //authService.fillAuthData();
//}]);