function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5){
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }

}

// Change this value to test
testElseIf(7);

/*
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

    if (num > 15) {
      return "Bigger than 15";
    } else if (num < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 15";
    }

Convert the logic to use else if statements.

1. You should have at least two else statements
2. You should have at least two if statements
3. You should have closing and opening curly braces for each condition
4. testElseIf(0) should return "Smaller than 5"
5. testElseIf(5) should return "Between 5 and 10"
6. testElseIf(7) should return "Between 5 and 10"
7. testElseIf(10) should return "Between 5 and 10"
8. testElseIf(12) should return "Greater than 10"
*/
