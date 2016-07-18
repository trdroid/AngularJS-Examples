# Controllers

**Purpose**

The main purpose of a controller is to attach

* models
* functions containing business logic

to the scope, so that they can be accessed in the views. The scope is a binding between a controller and a view.

![](_misc/Controller-Scope-View.png)

In AngularJS, a controller is written as a constructor function that is instantiated when AngularJS encounters an *ng-controller* directive in HTML.
