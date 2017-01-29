myApp.directive('headerDirect',function(){
  return  {
    restrict: 'EA',
    templateUrl: './app/directives/header/header.html',
    controller: function($scope){
      $scope.test = 'header directive header';
    }
  };
});//closing
