var app = angular.module('app', ['ngRoute']);
app.controller('appController', function ($scope, $route, $http) {
    let url = "https://jsonplaceholder.typicode.com/posts";
    $scope.message = "It's working.";
    $scope.message = "It's working. Below is a fake API request.";
    $http.get(url).then(data => {
        $scope.posts = data.data;
    })
});

//ngRoute Config
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/about', {
            templateUrl: 'about.html'
        })
        .otherwise(
            {templateUrl: 'home.html'}
        )
});