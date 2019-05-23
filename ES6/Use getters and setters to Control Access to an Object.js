function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(Fahrenheit){
      this._Fahrenheit = Fahrenheit;
    }

    // getter
    get Celsius(){
      return 5/9 * (this.Fahrenheit - 32);
    }

    // setter
    set Celsius(Fahrenheit){
      this.Fahrenheit = Fahrenheit;
    }

  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp)

/*
You can obtain values from an object, and set a value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing
the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function.
This change could involve calculations, or even overwriting the previous value completely.

    class Book {
      constructor(author) {
        this._author = author;
      }
      // getter
      get writer(){
        return this._author;
      }
      // setter
      set writer(updatedAuthor){
        this._author = updatedAuthor;
      }
    }
    const lol = new Book('anonymous');
    console.log(lol.writer);  // anonymous
    lol.writer = 'wut';
    console.log(lol.writer);  // wut

Notice the syntax we are using to invoke the getter and setter - as if they are not even functions.

Getters and setters are important, because they hide internal implementation details.

Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.

Now create getter and setter in the class, to obtain the temperature in Celsius scale.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale,
and C is the value of the same temperature in Celsius scale

Note

When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.

This is the power of getter or setter - you are creating an API for another user, who would get the correct result, no matter which one you track.

In other words, you are abstracting implementation details from the consumer.

1. Thermostat should be a class with a defined constructor method.
2. class keyword was used.
3. Thermostat can be instantiated.
*/