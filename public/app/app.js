var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){
  //default router
  $urlRouterProvider.otherwise('/');
  //home page and landing page
  $state('home',{
    url: '/',
    templateUrl: './app/routes/home/homeTemp.html',
    controller: 'homeCtrl'
  });
})//closing
