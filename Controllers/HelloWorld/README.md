```HTML
<!DOCTYPE html>
<html ng-app="app">
  <head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.30/angular.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>

  <body ng-controller="WishingController">
    {{message}}    
  </body>
</html>
```

```javascript
var app = angular.module('app', []);

app.controller('WishingController', function($scope) {
  $scope.message = 'Hello World!';
});
```

```javascript
(function() {
  var app = angular.module('app', []);

  app.controller('WishingController', function($scope) {
    $scope.message = 'Hello World!';
  });
})();
```

```javascript
angular.module('app', []).controller('WishingController', function($scope) {
  $scope.message = 'Hello World!';
});
```

```html
<!DOCTYPE html>
<html ng-app="app">
  <head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.30/angular.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>

  <body ng-controller="WishingController">
    <div>
      {{message}}
    </div>

    <div>
      {{initialGreeting}}
    </div>

    <button ng-click="greet()">Click Me!</button>
  </body>
</html>
```

```javascript
angular.module('app', []).controller('WishingController', function($scope) {
  $scope.message = 'Hello World!';

  $scope.greetings = ['Welcome!', 'Good Morning!', 'Good Day!'];
  $scope.initialGreeting = $scope.greetings[0];

  $scope.greet = function() {
    var index = parseInt(Math.random() * $scope.greetings.length);

    $scope.initialGreeting = $scope.greetings[index];
  }
});
```
