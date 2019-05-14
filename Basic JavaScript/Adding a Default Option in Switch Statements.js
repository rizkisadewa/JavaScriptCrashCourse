function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case "a":
      answer === "a";
      answer = "apple";
      break;
    case "b":
      answer === "b";
      answer = "bird";
      break;
    case "c":
      answer === "c";
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log(switchOfStuff(4));


/*
In a switch statement you may not be able to specify all possible values as case statements.
Instead, you can add the default statement which will be executed if no matching case statements are found.
Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

    switch (num) {
      case value1:
        statement1;
        break;
      case value2:
        statement2;
        break;
    ...
      default:
        defaultStatement;
        break;
    }

Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"

1. switchOfStuff("a") should have a value of "apple"
2. switchOfStuff("b") should have a value of "bird"
3. switchOfStuff("c") should have a value of "cat"
4. switchOfStuff("d") should have a value of "stuff"
5. switchOfStuff(4) should have a value of "stuff"
6. You should not use any if or else statements
7. You should use a default statement
8. You should have at least 3 break statements
*/
