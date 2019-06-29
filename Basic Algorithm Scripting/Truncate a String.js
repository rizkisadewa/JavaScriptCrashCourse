function truncateString(str, num) {
  // Clear out that junk in your trunk
  let newString = "";

  if(num < str.length){
    for(let i=0;i<num;i++){
      newString = newString + str[i];
    }

    return newString + "...";

  } else {
    return str;
  }

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

1. truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
2. truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
3. truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
4. truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
5. truncateString("A-", 1) should return "A...".
6. truncateString("Absolutely Longer", 2) should return "Ab...".
*/
