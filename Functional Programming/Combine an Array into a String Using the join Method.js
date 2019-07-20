function sentensify(str) {
  // Add your code below this line
  return str.split(/\W/).join(" ");
  // Add your code above this line
}
console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("The.force.is.strong.with.this.one"));
console.log(sentensify("There,has,been,an,awakening"));

/*
The join method is used to join the elements of an array together to create a string.
It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

    var arr = ["Hello", "World"];
    var str = arr.join(" ");
    // Sets str to "Hello World"

Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str.
The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.

1. Your code should use the join method.
2. Your code should not use the replace method.
3. sentensify("May-the-force-be-with-you") should return a string.
4. sentensify("May-the-force-be-with-you") should return "May the force be with you".
5. sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one".
6. sentensify("There,has,been,an,awakening") should return "There has been an awakening".
*/
