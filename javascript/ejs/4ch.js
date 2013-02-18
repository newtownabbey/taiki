// # Eloquent Javascript Tutorial
// ## Data Structures: Object & Arrays


// [Chapter 4](http://eloquentjavascript.net/chapter4.html)


// ### Object

// #### Properties

// Properties can be accessed in two ways

var text = "purple haze";
console.log(text["length"]);
console.log(text.length);



// The values null and undefined do not have any properties. Trying to read properties from such a value produces an error.
/*
var nothing = null;
console.log(nothing.length);
*/


// If a property that does not yet exist is set with the = operator, it is added to the object.

var empty = {};
empty.notReally = 1000;
console.log(empty.notReally);


// Properties whose names are not valid variable names have to be quoted when creating the object, and approached using brackets
var kandidat1 = {"politische Orientierung": "SPD", "Alter": 50};
console.log(kandidat1["politische Orientierung"]);
console.log(kandidat1["Alter"]);
kandidat1.Alter = 51;
console.log(kandidat1["Alter"]);
delete kandidat1.Alter;
console.log(kandidat1["Alter"]); // undefined

// One can even use variables to name properties:
var kandidat2 = new Object();
kandidat2.Alter = 62;
console.log(kandidat2["Alter"]);


// The operator in can be used to test whether an object has a certain property. It produces a boolean.
var matrjoschka = {};
matrjoschka.content = "matrjoschka";
/*
console.log("matrjoschka" in matrjoschka);
console.log("matrjoschka" in matrjoschka.content);
*/
// When we have two numbers, 120 and 120, they can for all practical purposes be considered the precise same number. With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties.

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

// ### Arrays

// Collections of things are what objects are used for. One could make an object like this
var mailArchive = {0: "Dear nephew, ... (mail number 1)",
                   1: "(mail number 2)",
                   2: "(mail number 3)"};

for (var current = 0; current in mailArchive; current++)
  console.log("Processing e-mail #", current, ": ", mailArchive[current]);

// Special kind of objects: Arrays contains a number of operations useful for this kind of collection

var mailArchive = ["mail one", "mail two", "mail three"];

for (var current = 0; current < mailArchive.length; current++)
  console.log("Processing e-mail #", current, ": ", mailArchive[current]);



// ### Ex. 4.2

// Write a function range that takes one argument, a positive number, and returns an array containing all numbers from 0 up to and including the given number.
//

function range(upto) {
    var result = [];
    for (var i = 0; i < upto; i++)
    result[i] = i;
    return result;
}
console.log(range(5));


// function retrieveMails can be used to get hold of this array

/*
var mailArchive = function retrieveMails();

for (var i = 0; i < mailArchive.length; i++) {
    var email = mailArchive[i];
    console.log("Processing email #", i);
    /* Do more things
}
*/

// ### Ex. 4.4

// Write a function called startsWith that takes two arguments, both strings. It returns true when the first argument starts with the characters in the second argument, and false otherwise.

function startsWith(string, pattern) {
      return string.slice(0, pattern.length) == pattern;
}

console.log(startsWith("rotation", "rot"));
