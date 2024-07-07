// main.js
var app = angular.module("bankApp", []);

app.controller("balancesController", ['$scope', function ($scope) {
    $scope.users = [
        { "name": "Priscilla Smith", "balance": 1191 },
        { "name": "Jimmy Verde", "balance": 1923 },
        { "name": "Hugo Chang", "balance": 1289 }
    ];

    //current object to hold the current user

    //addNew function to add a new user

    //remove function to remove a user

    //edit function to edit a user

    //save function to save a user
}]);
