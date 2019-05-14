var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if ((par > strokes && strokes <= 1)||(par == 1 && strokes == 1)){
    return "Hole-in-one!";
  } else if (par > strokes && strokes <= par - 2){
    return "Eagle";
  } else if(strokes < par){
    return "Birdie";
  } else if(par == strokes){
    return "Par";
  } else if (strokes == par + 1){
    return "Bogey";
  } else if (strokes <= par + 2){
    return "Double Bogey";
  } else if(strokes >= par + 3){
    return "Go Home!";
  }
  // Only change code above this line
}

// Change these values to test
console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));

/*
In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play.
Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments.
Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

1. golfScore(4, 1) should return "Hole-in-one!"
2. golfScore(4, 2) should return "Eagle"
3. golfScore(5, 2) should return "Eagle"
4. golfScore(4, 3) should return "Birdie"
5. golfScore(4, 4) should return "Par"
6. golfScore(1, 1) should return "Hole-in-one!"
7. golfScore(5, 5) should return "Par"
8. golfScore(4, 5) should return "Bogey"
9. golfScore(4, 6) should return "Double Bogey"
10. golfScore(4, 7) should return "Go Home!"
11. golfScore(5, 9) should return "Go Home!"
*/
