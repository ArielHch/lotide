// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log("\u2B55 \u2B55 \u2B55 Assertion Passed:" + actual + "===" + expected + "\u2B55 \u2B55 \u2B55");

  } else {
    console.log("\u274C \u274C \u274C Assertion Failed:" + actual + "!==" + expected + "\u274C \u274C \u274C");

  }
};
// TEST CODE
assertEqual("Coding is FUN", "Coding is FUN");
assertEqual(3.5,1.5);