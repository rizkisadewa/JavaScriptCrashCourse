let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result);

/*
You learned how to match literal patterns (/literal/) and wildcard character (/./).
Those are the extremes of regular expressions, where one finds exact matches and the other matches everything.
There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes.
Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this.
The [aiu] is the character class that will only match the characters "a", "i", or "u".

    let bigStr = "big";
    let bagStr = "bag";
    let bugStr = "bug";
    let bogStr = "bog";
    let bgRegex = /b[aiu]g/;
    bigStr.match(bgRegex); // Returns ["big"]
    bagStr.match(bgRegex); // Returns ["bag"]
    bugStr.match(bgRegex); // Returns ["bug"]
    bogStr.match(bgRegex); // Returns null

Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note
Be sure to match both upper- and lowercase vowels.

1. You should find all 25 vowels.
2. Your regex vowelRegex should use a character class.
3. Your regex vowelRegex should use the global flag.
4. Your regex vowelRegex should use the case insensitive flag.
5. Your regex should not match any consonants.
*/
