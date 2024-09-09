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
    //addNew function to add a new user
    $scope.addNew = function(current){
        
    }
    //remove function to remove a user
    $scope.remove = function(user){
        
    }
    //edit function to edit a user
    $scope.edit = function(user){
        
    }

    //save function to save a user
    $scope.save = function(){
        
    }
}]);
