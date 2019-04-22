"use strict";

angular.module("catDogApp")
.config(["$routeProvider", ($routeProvider) => {
    $routeProvider
    .when("/dog", {
        template: "<dog></dog>"
    })
    .when("/cat", {
        template: "<cat></cat>"
    })
    .otherwise({
        redirectTo: "/dog"
    })
}]);