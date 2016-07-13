# Modules

AngularJS allows the front-end code to be organized into reusable components called **modules**.
Modules help in writing maintainable front-end code by allowing the code to be structured.

A module in AnglarJS is a named-container that encapsulates different components of an AngularJS application.

**Features**

* A module can depend on other modules
* A module encapsulates and provides a namespace for different AngularJS components

**Creating a module**

A module can be created using the following function:

```javascript
angular.module(<module name>, <an array of dependencies>)
```

The *angular.module()* function serves the following purposes:

* Creating modules
* Retrieving modules
* Registering components

Examples:

Defining a module "sampleModule" without any dependencies

```javascript
angular.module("sampleModule", []);
```

Defining a module "secondModule" that depends on modules "sampleModule", "simpleModule"

```javascript
angular.module("secondModule", ["sampleModule", "simpleModule"]);
```
