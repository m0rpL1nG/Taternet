function NavController() {  
  var that = this;
  that.foo = "Foo!";
  console.log(that); // should print out the controller object
}

angular.module("Navigation")
    .controller("NavController", [
        NavController
    ]);