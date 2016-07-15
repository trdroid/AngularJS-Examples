# Modules

AngularJS allows the front-end code to be organized into reusable components called **modules**.
Modules help in writing maintainable front-end code by allowing the code to be structured.

A module in AnglarJS is a named-container that encapsulates different components of an AngularJS application.

**Features**

* A module can depend on other modules
* A module encapsulates and provides a namespace for different AngularJS components

### Creating a module

A module can be created using the *angular.module()* function as follows:

```javascript
angular.module(<module name>, <an array of dependencies>)
```

Examples:

Defining a module "sampleModule" without any dependencies

```javascript
angular.module("sampleModule", []);
```

Defining a module "secondModule" that depends on modules "sampleModule", "simpleModule"

```javascript
angular.module("secondModule", ["sampleModule", "simpleModule"]);
```

**Naming conventions**

A module name can mimic namespaces in languages like C# by using any of the following characters

* dots
* colons
* commas

The presence of these characters in a module name has no special semantics in AngularJS.

### Retrieving a module

An existing module can be retrieved using the same *angular.module()* function by just passing in the name of the module but not the list of depedencies.

```javascript
angular.module(<name of the existing module>)
```

Examples:

```javascript
var sampleModule = angular.module("sampleModule");

// or just

angular.module("sampleModule");
```

**Quick Summary**

The *angular.module()* function serves the following purposes:

* Creating modules
* Retrieving modules
* Attaching/Registering components

The *angular.module()* function returns

* an reference to the newly created module (or)
* a reference to an already created module

depending on if the module has already been created or not.


### Registering components

**Attaching a Controller**

A controller can be attached to a module by calling the *controller()* function on an AngularJS's *module* instance.

```javascript
<module instance>.controller(<controller name>, <controller function>)
```

**Attaching a Directive**

A directive can be attached to a module by calling the *directive()* function on an AngularJS's *module* instance.

```javascript
<module instance>.directive(<directive name>, function() {
  // register the directive here
  return {

  };
})
```
