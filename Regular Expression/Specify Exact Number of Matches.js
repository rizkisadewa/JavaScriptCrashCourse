let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
console.log(result);

/*
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.

    let A4 = "haaaah";
    let A3 = "haaah";
    let A100 = "h" + "a".repeat(100) + "h";
    let multipleHA = /ha{3}h/;
    multipleHA.test(A4); // Returns false
    multipleHA.test(A3); // Returns true
    multipleHA.test(A100); // Returns false

Change the regex timRegex to match the word "Timber" only when it has four letter m's.

1. Your regex should use curly brackets.
2. Your regex should not match "Timber"
3. Your regex should not match "Timmber"
4. Your regex should not match "Timmmber"
*/
