var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })
    .when('pages/mails', {
      templateUrl: 'pages/mails.html',
      controller: 'mailsController'
    })
    .when('pages/friends', {
      templateUrl: 'pages/friends.html',
      controller: 'friendsController'
    })
    .when('pages/settings', {
      templateUrl: 'pages/settings.html',
      controller: 'settingsController'
    })
    .otherwise({
      templateUrl: 'pages/invalidRoute.html'
      controller: 'invalidRouteController'
    })
});

app.controller('homeController', function($scope) {
  $scope.content = 'This would display my home page';
});

app.controller('mailsController', function($scope) {
  $scope.content = 'This would display a list of my emails';
});

app.controller('friendsController', function($scope) {
  $scope.content = 'This would display a list of my friends';
});

app.controller('settingsController', function($scope) {
  $scope.content = 'This would display a list of email settings';
});

app.controller('invalidRouteController', function($scope) {
  $scope.content = 'Invalid request!';
  $scope.pathRequested = $location.path();
});
