function telephoneCheck(str) {
  // Good luck!
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("5555"));

/*
================PROBLEM EXPLANATION==================
The task is not that hard to understand, implementing it is the hardest part. You have a to validate a US phone number.
This means there is a certain amount of numbers required, while you don’t need to put the country code,
you will still need the area code and use one of the few formats allowed.
================CODE EXPLANATION====================

    1. ^ denotes the beginning of the string.
    2. (1\s?)? allows for “1” or “1 ” if there is one.
    3. \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
    4. x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
    5. [\s\-]? checks for spaces or dashes between the groups of digits.
    6. $ denotes the end of the string. In this case the beginning ^
    and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
    Lastly we use regex.test(str) to test if the string adheres to the regular expression, it returns true or false.

*/
