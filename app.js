var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function ($log, $scope, $filter) {
    
    $scope.name = 'John';
    $scope.formattedname = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedname);

});
