/**
 * Created by David on 30/03/2016.
 */
document.write("hello..again! .. I am from Index.js in Client");

var myApp = angular.module('myApp', []);

// interface with internet so uses HTTP
// interface with server, retrieve our words
// handles interaction with server
// while controller handles html part
myApp.service('HistoryService', function($http){
    var baseUrl = "http://localhost:8080/";          // string, address of server
    // function saveWord inside myApp.service
    this.saveWord = function(newWord){
        var url = baseUrl + "saveCurrent";           // server + save current (address of our post handler)
        return $http.post(url, {"word":newWord})    // send data from website to server
    }
    // HistoryService.saveWord(newWord)
});




// note we have $scope as it uses the HTML file
myApp.controller('MyController', function($scope, HistoryService){
    $scope.newWord = 'cat';
    
    $scope.saveThisWord = function () {
        HistoryService.saveWord($scope.newWord)
            .then(saveSuccess, error)
    };

    function saveSuccess(json){
        console.log(json)
    }

    function error(err){
        console.log(err)
    }
});

