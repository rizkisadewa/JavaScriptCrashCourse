var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function(){
    return fullName.split(" ")[0];
  };

  this.getLastName = function(){
    return fullName.split(" ")[1];
  };

  this.getFullName = function(){
    return fullName;
  };

  this.setFirstName = function(name){
    fullName = name+" "+fullName.split(" ")[1];
  };

  this.setLastName = function(name){
    fullName = fullName.split(" ")[0]+" "+name;
  };

  this.setFullName = function(name){
    fullName = name;
  };

};

var bob = new Person('Bob Ross');
bob.getFullName;
console.log(Object.keys(bob).length);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFirstName("Haskell");
console.log(bob.getFullName());
bob.setLastName("Curry");
console.log(bob.getFullName());


/*
Fill in the object constructor with the following methods below:

    getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

=========PROBLEM EXPLANATION==============
When I started the program I figured I just had to create the six functions mentioned in the details. However, it was not that simple.
Creating them as a function was not the right way, I had to create them in a different way to make them a key.

There is also a tricky part as you need six keys no more or less, so at first I had the variable that store the original name as a key too which was wrong.

As for the usage of array, that is optional,
you could also create new variable to hold the separated string if you wish but an array is easier to deal with as strings are immutable.

Read the instructions carefully,
it is always a good hint in itself to run the code and check what the test results were so you know what to expect but do not fixate yourself on that.
Once you understand what you need to do, this problem is very easy and straightforward.

==========CODE EXPLANATION=================

    Create a variable that will make a copy of the full name that was passed as a parameter.
    Then we can proceed to create the six methods needed and return what is asked for.
    For the individual setters, we can use the split to turn the fullname into an array of first and last names
    and concatenate the unchanged portion of the name with what was passed as a parameter.





1. Object.keys(bob).length should return 6.
2. bob instanceof Person should return true.
3. bob.firstName should return undefined.
4. bob.lastName should return undefined.
5. bob.getFirstName() should return "Bob".
6. bob.getLastName() should return "Ross".
7. bob.getFullName() should return "Bob Ross".
8. bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
9. bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
10. bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
11. bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
12. bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
*/
