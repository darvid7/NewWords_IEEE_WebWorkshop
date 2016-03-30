/**
 * Created by David on 30/03/2016.
 */
document.write("hello..again! .. I am from Index.js in Client");

var myApp = angular.module('myApp', []);

myApp.controller('MyController', function($scope){
    $scope.newWord = 'cat';
});