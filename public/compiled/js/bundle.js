'use strict';

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
  //default router
  //home page and landing page
  $stateProvider.state('home', {
    url: '/',
    templateUrl: './app/routes/home/homeTemp.html',
    controller: 'homeCtrl'
  });

  $urlRouterProvider.otherwise('/');
}); //closing
'use strict';

myApp.service('mainService', function ($http) {}); //closing
"use strict";

myApp.controller('homeCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.test = "HELLO WORLD";
}); //closing
//# sourceMappingURL=bundle.js.map
