function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var a = 2 * Math.PI;
  var newArr = [];
  var getOrbPeriod = function(obj){
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for(var elm in arr){
    newArr.push(getOrbPeriod(arr[elm]));
  }

  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));

/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

===========PROBLEM EXPLANATION======================
The first thing to do is to get familiar with what the program is for by knowing what Orbital period exactly is.
You’ve to return a new array that transforms the element’s average altitude into their orbital periods.
The parts generally found hard are finding the formula, implementing it and for some people, modifying objects by the key.
However, something that is not very clear is the fact that your program has to be able to check for any number of objects in the array;
This is what is tested on the second part.

============CODE EXPLANATION=======================

    GM and earthRadius are both given to us.
    To make the code easier to edit and read, each part of the equation is written separately.
    Create newArr to store the orbPeriod‘s.
    a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
    Create a function, gerOrbPeriod() that will do the required work for any amount of objects.
    c is (earthRadius + avgAlt) to the cube.
    b is the square root of c divided by GM.
    Create orbPeriod to store the product of a and b, with the Math.round() function applied to round up to the next whole number.
    Then we delete the key avgAlt, and add the new key and its value.


1. orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
2. orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

*/
