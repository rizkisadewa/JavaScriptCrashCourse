let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
let result = userCheck.test(username);
console.log(result);

/*
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

2) Username letters can be lowercase and uppercase.

3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.

Change the regex userCheck to fit the constraints listed above.

1. Your regex should match JACK
2. Your regex should not match J
3. Your regex should match Oceans11
4. Your regex should match RegexGuru
5. Your regex should not match 007
6. Your regex should not match 9

EXPLAIN
1. The only numbers in the username have to be at the end. \d$ There can be zero or more of them at the end. * -> /\d*$/;
2. Username letters can be lowercase and uppercase. i --> /\d*$/i;
3. Usernames have to be at least two characters long. {2,} A two-letter username can only use alphabet letter characters. ^[a-z] --> ^[a-z]
*/
