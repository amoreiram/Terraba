
//app.factory('authService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {

/*app.factory('authService', function () {
    var shinyNewServiceInstance;
    //factory function body that constructs shinyNewServiceInstance
    return shinyNewServiceInstance;
});*/

/*
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
*/