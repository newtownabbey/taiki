// # Angular.JS Framework Tutorial Part 1

// [Building simple objects](http://helephant.com/2008/08/17/building-simple-objects/)

// ## Building simple objects
//
// Javascript objects are basically just hash tables, a group of related properties and functions that can be accessed by a key. Properties are dynamically added at runtime. Methods are just properties that happen to be functions.

// ### Building a simple object
//
// The simplest way to build objects in Javascript is by declaring a new variable of type object and assigning the properties or methods that the object needs:
//

// Javascript objects are dynamic. Their properties do not need to be defined before they are set. You can add a new property at any time at runtime just by assigning it. You do not need to declare data types like you do in class based languages like C# and java but you can share implementation between objects of the same type using constructor functions and object prototypes.
//
// Notice that we have set the hello property of rufus to a function rather than a primitive data type like a string. This is possible because functions are just a special type of object in javascript. They can be treated just like a string or a number or any other data type. A javascript object's methods are just a property that happen to be a function.
//
// The hello function is also being declared as an anonymous function. We don't need to declare it before we assign it to the property and it doesn't have a name.
//

var rufus = new Object();
rufus.name = "rufus";
rufus.species = "cat";
rufus.hello = function() { alert("miaow"); }

// ### Dot syntax vs subscript syntax
//
// Objects in javascript are just hashtables. There is nothing particularly special about them, they are just a collection of key/item pairs. One side effect of this is you can access their properties with either an object like dot syntax or a array like subscript syntax.
//
// The previous example used the dot syntax to access the name, species and hello properties. Here's the same example using the subscript syntax:

// There is no difference between the two syntaxes. They are just two different ways of saying the same thing and can be used interchangeably.
//
// The advantage of the dot syntax is it looks more natural to people used to accessing object properties in languages like C# or java. Most javascript code that uses objects accesses the properties in this way.
//
// Sometimes subscript syntax can be very useful because the key is indexed with a string. The string can be built at runtime to access an object's properties without knowing exactly what properties it has.
//
var casper = new Object();
casper["name"] = "casper";
casper["species"] = "bird";
casper["hello"] = function() { alert("squark! squark!");}

// For example you could use a foreach loop to iterate through each property in the object or dynamically build the property name:

for(var property in rufus)
    alert(rufus[property]'toString());
    var myObject = {
        property1: "chocolate",
        property2: "cake",
        property3: "brownies"
    }
for(var x=1; x<4; x++)
alert(myObject["property" + x]);

// ### Object literal syntax
//
//In the first example we declared an object by calling the Object constructor function. There is a quicker (as in less typing) way to do this using something called the object literal.
//
//The shortcut syntax object literal syntax is assigning the variable to a pair of braces. Assigning a variable to the object literal is exactly the same as calling the Object constructor:
//
var empty1 = {}; // is the same as saying . but is quicker to type
var empty2 = new Object();
// The object literal can also be used to set up the object's properties. The properties can be created as a list of key/value pairs. It's very useful for when you want to initialize an object with a heap of different properties when you create it. It's a very common thing to see in Javascript code.
//
//Here's the first example declared as an object literal:

var sabby = {
    name : "Sabby",
    species: "cat",
    hello : function() { alert("hissss"); }
};

// There is absolutely no difference between objects created with any of these syntaxes. You should choose the one that works best for what you.re doing. Once you have declared an object using the object literal syntax that, you can still use the dot or subscript syntax to add or change its properties:
sabby.age = 7;



