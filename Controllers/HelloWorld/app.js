angular.module('app', []).controller('WishingController', function($scope) {
  $scope.message = 'Hello World!';

  $scope.greetings = ['Welcome!', 'Good Morning!', 'Good Day!'];
  $scope.initialGreeting = $scope.greetings[0];

  $scope.greet = function() {
    var index = parseInt(Math.random() * $scope.greetings.length);

    $scope.initialGreeting = $scope.greetings[index];
  }
});
