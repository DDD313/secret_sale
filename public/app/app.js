var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //default router
  //home page and landing page
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/routes/home/homeTemp.html',
    controller: 'homeCtrl'
  });

  $urlRouterProvider.otherwise('/');
});//closing
