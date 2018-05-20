//A closure is the combination of a function and the lexical environment within which that function was declared
//Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data.

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();

function makeFunc() {
  var name = 'Mozilla 1';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
//A closure is the combination of a function and the lexical environment within which that function was declared.
// This environment consists of any local variables that were in-scope at the time the closure was created. 
//In this case, myFunc is a reference to the instance of the function displayName created when makeFunc is run. 
//The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. 
//For this reason, when myFunc is invoked, the variable name remains available for use and "Mozilla" is passed to alert.

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

//Refere more for the more details in closure concepts https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Practical_closures