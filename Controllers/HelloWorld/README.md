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
