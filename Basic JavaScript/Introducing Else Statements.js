function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }


  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);


/*

When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen.
With an else statement, an alternate block of code can be executed.

    if (num > 10) {
      return "Bigger than 10";
    } else {
      return "10 or Less";
    }

Combine the if statements into a single if/else statement.

1. You should only have one if statement in the editor
2. You should use an else statement
3. testElse(4) should return "5 or Smaller"
4. testElse(5) should return "5 or Smaller"
5. testElse(6) should return "Bigger than 5"
6. testElse(10) should return "Bigger than 5"
7. Do not change the code above or below the lines.
*/
