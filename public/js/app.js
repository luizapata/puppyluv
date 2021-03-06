var app = angular.module('puppyLove', [
  'ngRoute',
  'OwnerService',
  'MainController',
  'AddOwnerController',
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'MainController'
  ])

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    })
    .when('/add', {
      templateUrl: 'views/addOwner.html',
      controller: 'AddOwner'
    })
    .when('/owners', {
      templateUrl: 'views/owners.html',
      controller: 'OwnerController'
    })
    .when('/dogs', {
       templateUrl: 'views/dogs.html',
        controller: 'DogController'
    })
     .when('/about', {
       templateUrl: 'views/about.html'
    })
     .when('/chat', {
       templateUrl: 'views/chat.html'
           })
     .when('/login', {
       templateUrl: 'views/signin.html'
    })
     .when('/signup', {
       templateUrl: 'views/signup.html'
    })
    .otherwise({
     redirectTo: '/'
    })

}]);