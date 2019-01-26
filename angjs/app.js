var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "views/main.htm",
        controller: "Main"
    }).when("/specific/:compName", {
        templateUrl: "views/company.htm",
        controller: "SpecCompany"

    });

});

app.service('StockData', function($http) {

    this.fetchData = function() {

        return $http.get("php/test.php?stock=fetch").then(function(response) {
            return response;

        });


    }
});