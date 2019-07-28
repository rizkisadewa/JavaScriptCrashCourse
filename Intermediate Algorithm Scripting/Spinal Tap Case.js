function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // create variable for the white space and underscores
  var tempRegex = /\s+|_+/g;

  // replace to lower-space-upperspace
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(tempRegex, '-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));

/*
========CODE EXPLANATION===============

1. tempRegex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
2. The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
3. While returning the string, another replace() replaces spaces and underscores with dashes using tempRegex.

=======================================

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

1. spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
2. spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
3. spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
4. spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
5. spinalCase("AllThe-small Things") should return "all-the-small-things".
*/
