"use strict";
// Import AngularJS (for environments that support module imports)
var angular = require("angular");

// Declare the Angular module
var app = angular.module("bankApp", []);

// Define the controller
app.controller("balancesController", ['$scope', function ($scope) {
    $scope.users = [
        { "name": "Priscilla Smith", "balance": 1191 },
        { "name": "Jimmy Verde", "balance": 1923 },
        { "name": "Hugo Chang", "balance": 1289 }
    ];

    // Function to remove a user
    $scope.remove = function (user) {
        // Find the index of the user in the users array
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);
    };
}]);
