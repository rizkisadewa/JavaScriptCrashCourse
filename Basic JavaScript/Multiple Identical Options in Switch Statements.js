function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line

  switch(val){
    case 1:
      answer === 1;
      answer = "Low";
    case 2:
      answer === 2;
      answer = "Low";
    case 3:
      answer === 3;
      answer = "Low";
      break;
    case 4:
      answer === 4;
      answer = "Mid";
    case 5:
      answer === 5;
      answer = "Mid";
    case 6:
      answer === 6;
      answer = "Mid";
      break;
    case 7:
      answer === 7;
      answer = "High";
    case 8:
      answer === 8;
      answer = "High";
    case 9:
      answer === 9;
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));
console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));


/*
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered.
If you have multiple inputs with the same output, you can represent them in a switch statement like this:

    switch(val) {
      case 1:
      case 2:
      case 3:
        result = "1, 2, or 3";
        break;
      case 4:
        result = "4 alone";
    }

Cases for 1, 2, and 3 will all produce the same result.

Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"

Note
You will need to have a case statement for each number in the range.

1. sequentialSizes(1) should return "Low"
2. sequentialSizes(2) should return "Low"
3. sequentialSizes(3) should return "Low"
4. sequentialSizes(4) should return "Mid"
6. sequentialSizes(5) should return "Mid"
7. sequentialSizes(6) should return "Mid"
8. sequentialSizes(7) should return "High"
9. sequentialSizes(8) should return "High"
10. sequentialSizes(9) should return "High"
11. You should not use any if or else statements
12. You should have nine case statements
*/
