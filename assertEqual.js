// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log("Assertion Passed:" + actual + "===" + expected);

  } else {
    console.log("Assertion Failed:" + actual + "!==" + expected);

  }
};
// TEST CODE
assertEqual("Coding is FUN", "But so difficult");
assertEqual(3.5,1.5);