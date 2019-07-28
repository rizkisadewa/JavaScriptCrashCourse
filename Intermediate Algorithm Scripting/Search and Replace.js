function myReplace(str, before, after) {
  // find index where before is on string
  var index = str.indexOf(before);

  // check to see if the first letter is uppercase or not
  if(str[index] === str[index].toUpperCase()){
    // Change the after word to be capitalized before we use it
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  // Now replace the original str with the edited one
  str = str.replace(before, after);

  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

/*
===========CODE EXPLANATION============

    1. Use indexOf() to find location of before in string.
    2. If first letter of before is capitalized, change first letter of after to uppercase.
    3. Replace before in the string with after.
    4. Return the new string.

=======================================

1. Perform a search and replace on the sentence using the arguments provided and return the new sentence.
2. First argument is the sentence to perform the search and replace on.
3. Second argument is the word that you will be replacing (before).
4. Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

1. myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
2. myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
3. myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
4. myReplace("His name is Tom", "Tom", "john") should return "His name is John".
5. myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".

*/
