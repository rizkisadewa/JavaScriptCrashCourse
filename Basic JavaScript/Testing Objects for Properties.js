// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here

  if (myObj.hasOwnProperty(checkProp) == true){
    return myObj[checkProp];
  } else {
    return "Not Found";
  }


}

// Test your code by modifying these values
console.log(checkObj("gift"));
console.log(checkObj("pet"));
console.log(checkObj("house"));

/*
Sometimes it is useful to check if the property of a given object exists or not.
We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty()
returns true or false if the property is found or not.

Example

    var myObj = {
      top: "hat",
      bottom: "pants"
    };
    myObj.hasOwnProperty("top"); // true
    myObj.hasOwnProperty("middle"); // false

Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".

1. checkObj("gift") should return "pony".
2. checkObj("pet") should return "kitten".
3. checkObj("house") should return "Not Found".
*/
