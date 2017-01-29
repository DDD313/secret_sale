var myApp = angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
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
  .state('createUser',{
    url: '/createUser',
    templateUrl: './app/routes/createUser/createUserTemp.html',
    controller: 'createUserCtrl'
  })
  //user page
  .state('user',{
    url: '/user/:id',
    templateUrl: './app/routes/user/userTemp.html',
    controller: 'userCtrl'
  })
  //find page
  .state('find',{
    url: '/find',
    templateUrl: '.app/routes/find/findTemp.html',
    controller: 'findCtrl'
  });
});//closing
