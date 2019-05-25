let sample = "Men are from Mars and women are from Venus.";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace).length;
console.log(result);

/*
You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s.
This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.
You can think of it being similar to the character class [^ \r\t\f\n\v].

    let whiteSpace = "Whitespace. Whitespace everywhere!"
    let nonSpaceRegex = /\S/g;
    whiteSpace.match(nonSpaceRegex).length; // Returns 32

Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

1. Your regex should use the global flag.
2. Your regex should use the shorthand character
3. Your regex should find 35 non-spaces in "Men are from Mars and women are from Venus."
4. Your regex should find 23 non-spaces in "Space: the final frontier."
5. Your regex should find 21 non-spaces in "MindYourPersonalSpace"
*/
