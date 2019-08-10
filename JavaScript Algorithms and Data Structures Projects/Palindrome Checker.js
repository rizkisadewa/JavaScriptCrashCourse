function palindrome(str) {
  // Good luck!
  return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}



console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));

/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation,
spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

===========PROBLEM EXPLANATION=====================
Our goal for solving this problem is tidying up the string passed in, and checking whether it is in fact a palindrome.

    If you are unsure of what a palindrome is, it is a word or phrase that when reversed spells the same thing forwards or backwards.
    A simple example is mom, when you reverse the letters, it spells the same thing! Another example of a palindrome is race car.
    When we take out anything that is not a character it becomes racecar which is the same spelled forwards or backwards!

Once we have determined whether it is a palindrome or not we want to return either true or false based on our findings.

============CODE EXPLANATION=======================


    We start by using regular expressions to replace any white space or non-alphanumeric characters with nothing (or null),
    which essentially removes them from the string.

    Next we chain .toLowerCase() to remove any capital letters because A is a different character than a.
    The problem did not ask us to worry about making sure the case of the characters was identical, just the spelling.

    Our next step is to take our string and .split() it, .reverse() it, and finally .join() it back together.

    Last step is to check that the string is the same forwards and backwards and return our result!



    1. palindrome("eye") should return a boolean.
    2. palindrome("eye") should return true.
    3. palindrome("_eye") should return true.
    4. palindrome("race car") should return true.
    5. palindrome("not a palindrome") should return false.
    6. palindrome("A man, a plan, a canal. Panama") should return true.
    7. palindrome("never odd or even") should return true.
    8. palindrome("nope") should return false.
    9. palindrome("almostomla") should return false.
    10. palindrome("My age is 0, 0 si ega ym.") should return true.
    11. palindrome("1 eye for of 1 eye.") should return false.
    12. palindrome("0_0 (: /-\ :) 0-0") should return true.
    13. palindrome("five|\_/|four") should return false.
*/
