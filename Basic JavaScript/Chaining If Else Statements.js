function testSize(num) {
  // Only change code below this line
  if (num < 5){
    return "Tiny";
  } else if(num < 10){
    return "Small";
  } else if(num < 15){
    return "Medium";
  } else if(num < 20){
    return "Large";
  } else {
    return "Huge";
  }
  // Only change code above this line
}

// Change this value to test
console.log(testSize(0));
console.log(testSize(4));
console.log(testSize(5));
console.log(testSize(8));
console.log(testSize(10));
console.log(testSize(14));
console.log(testSize(15));
console.log(testSize(17));
console.log(testSize(20));
console.log(testSize(25));


/*
if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

    if (condition1) {
      statement1
    } else if (condition2) {
      statement2
    } else if (condition3) {
      statement3
    . . .
    } else {
      statementN
    }

Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"


1. You should have at least four else statements
2. You should have at least four if statements
3. You should have at least one return statement
4. testSize(0) should return "Tiny"
5. testSize(4) should return "Tiny"
6. testSize(5) should return "Small"
7. testSize(8) should return "Small"
8. testSize(10) should return "Medium"
9. testSize(14) should return "Medium"
10. testSize(15) should return "Large"
11. testSize(17) should return "Large"
12. testSize(20) should return "Huge"
13. testSize(25) should return "Huge"
*/
