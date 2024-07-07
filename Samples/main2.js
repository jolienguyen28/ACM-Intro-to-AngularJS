// main.js
var app = angular.module("bankApp", []);

app.controller("balancesController", ['$scope', function ($scope) {
    $scope.users = [
        { "name": "Priscilla Smith", "balance": 1191 },
        { "name": "Jimmy Verde", "balance": 1923 },
        { "name": "Hugo Chang", "balance": 1289 }
    ];

    //current object to hold the current user
    $scope.current = {};

    $scope.addNew = function (current) {
        alert("New member!");
        $scope.users.push(angular.copy(current));
        $scope.current = {}; // Clear the form
    };

    $scope.remove = function (user) {
        var index = $scope.users.indexOf(user);
        alert("Deleting user: " + user.name + " with index " + index);
        $scope.users.splice(index, 1);
    };

    $scope.edit = function (user) {
        $scope.current = angular.copy(user);
    };

    $scope.save = function () {
        $scope.current = { name: '', balance: 0 };
    };
}]);
