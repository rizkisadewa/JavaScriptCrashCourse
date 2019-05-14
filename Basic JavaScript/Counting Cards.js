var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  if (count > 0){
    return count+" Bet";
  } else if (count <= 0){
    return count+" Hold";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
// console.log(cc(2));
// console.log(cc(3));
// console.log(cc(4));
// console.log(cc(5));
// console.log(cc(6));

// console.log(cc(7));
// console.log(cc(8));
// console.log(cc(9));

// console.log(cc(10));
// console.log(cc("J"));
// console.log(cc("Q"));
// console.log(cc("K"));
// console.log(cc("A"));

// console.log(cc(2));
// console.log(cc("J"));
// console.log(cc(9));
// console.log(cc(2));
// console.log(cc(7));


console.log(cc(2));
console.log(cc("J"));
console.log(cc(9));
console.log(cc(2));
console.log(cc(7));

// console.log(cc(2));
// console.log(cc(2));
// console.log(cc(10));

// console.log(cc(3));
// console.log(cc(2));
// console.log(cc("A"));
// console.log(cc(10));
// console.log(cc("K"));

/*
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high
and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below.
When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'

You will write a card counting function. It will receive a card parameter, which can be a number or a string,
and increment or decrement the global count variable according to the card's value (see table).
The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative.
The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

1. Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet
2. Cards Sequence 7, 8, 9 should return 0 Hold
3. Cards Sequence 10, J, Q, K, A should return -5 Hold
4. Cards Sequence 3, 7, Q, 8, A should return -1 Hold
5. Cards Sequence 2, J, 9, 2, 7 should return 1 Bet
6. Cards Sequence 2, 2, 10 should return 1 Bet
7. Cards Sequence 3, 2, A, 10, K should return -1 Hold
*/
