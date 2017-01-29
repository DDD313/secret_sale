'use strict';

var myApp = angular.module('myApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  //default route
  $urlRouterProvider.otherwise('/');
  //home page and landing page
  $stateProvider
  //landing page
  .state('home', {
    url: '/',
    templateUrl: './app/routes/home/homeTemp.html',
    controller: 'homeCtrl'
  })
  //createUser page
  .state('createUser', {
    url: '/createUser',
    templateUrl: './app/routes/createUser/createUserTemp.html',
    controller: 'createUserCtrl'
  })
  //user page
  .state('user', {
    url: '/user/:id',
    templateUrl: './app/routes/user/userTemp.html',
    controller: 'userCtrl'
  })
  //find page
  .state('find', {
    url: '/find',
    templateUrl: '.app/routes/find/findTemp.html',
    controller: 'findCtrl'
  });
}); //closing
'use strict';

myApp.service('mainService', function ($http) {}); //closing
"use strict";

myApp.controller('createUserCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.test = "HELLO WORLD createUserCtrl";
}); //closing
"use strict";

myApp.controller('findCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.test = "HELLO WORLD findCtrl";
}); //closing
"use strict";

myApp.controller('homeCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.test = "HELLO WORLD";
}); //closing
"use strict";

myApp.controller('userCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.test = "HELLO WORLD user controller";
}); //closing
//# sourceMappingURL=bundle.js.map
