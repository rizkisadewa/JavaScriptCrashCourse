function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(chainToSwitch("bob"));
console.log(chainToSwitch(42));
console.log(chainToSwitch(1));
console.log(chainToSwitch(99));
console.log(chainToSwitch(7));
console.log(chainToSwitch("John"));
console.log(chainToSwitch(156));


/*
If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

    if (val === 1) {
      answer = "a";
    } else if (val === 2) {
      answer = "b";
    } else {
      answer = "c";
    }

can be replaced with:

    switch(val) {
      case 1:
        answer = "a";
        break;
      case 2:
        answer = "b";
        break;
      default:
        answer = "c";
    }

Change the chained if/else if statements into a switch statement.

1. You should not use any else statements anywhere in the editor
2. You should not use any if statements anywhere in the editor
3. You should have at least four break statements
4. chainToSwitch("bob") should be "Marley"
5. chainToSwitch(42) should be "The Answer"
6. chainToSwitch(1) should be "There is no #1"
7. chainToSwitch(99) should be "Missed me by this much!"
8. chainToSwitch(7) should be "Ate Nine"
9. chainToSwitch("John") should be "" (empty string)
10. chainToSwitch(156) should be "" (empty string)
*/
