'use strict';
angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $http) {
    
    /*$scope.txt = 'hello txt';
    $http.get('http://127.0.0.1:3000/api/tests')

    .success(function(resp) {
        console.log(resp);
    });

    $http.put('http://localhost:3000/api/tests', {
        "id": 3,
        "name": "sunlong",
        "age": 26
    })

    .success(function(resp) {
        console.log(resp);
    });*/

})

.controller('EvaluateCtrl', function($scope, $http) {
    $scope.step = 4;

    $scope.nextStep = function() {
        $scope.step++;
    }
})

.controller('ShopCtrl', function($scope, $http) {
    
})

.controller('ShopDetailCtrl', function($scope, $http) {
    
})
