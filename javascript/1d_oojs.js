// # Object Oriented Javascript Tutorial
// ## Not everything in Javascript are objects

// ### Primitive Values:
 // String
 // Number
 // Boolean
 // Undefined
 // Null

 // ### Objects:
 // Object
 // Array
 // Function
 // Date
 // RegExp


// String is a primitive value, not an object.
// Even though we can use a string literal and use a property on it
 "hello".length
 // What Javascript actually does behind the scene.
 // after our statement executes the String object is completely gone by the garbage collector
 new String("hello").length;

// The only way to create to create an object from a primitive value is to use a constructor (new) from the particular datatype:
var obj = new String("hello");
typeof obj;     // -> "object" , the datatype is still an object and not converted into a string
obj.valueOf();  // -> "hello"
typeof obj.valueOf();  // -> "string"

// create a variable with a value 10
var num = 10;
// assing a property for this value
num.property = "hello"; // -> "hello"
// by try to access this property. num is a value, it is not possible to assign a property to a value.
num.property;           // -> undefined

 // create an object
num = new Number(10);
// assign a property for this value
num.property = "hello"; // -> "hello"
// access this property. num is an object and therefor it is possible to assign a property.
num.property;           // -> "hello"


// ## Creating Objects and Factory Functions

// old way:
var person          = new Object();
person.firstName    = "John";
person.lastName     = "Doe";
// Javascript does not have methods like in other OO-languages, rather it has properties that contains function objects
person.sayHi        = function() {
    return "Hi there";
};
person.firstName; // -> "John"
person.lastName;  // -> "Doe"
person.sayHi();   // -> "Hi there"

// new way (equivalent to the old way):
var person = {
    firstName   : "John",
    lastName    : "Doe",
    sayHi       : function(){
        return "Hi there";
    }
};
// if we want to create another person 'Jane Doe', then we can copy it:
var person = {
    firstName   : "Jane",
    lastName    : "Doe",
    sayHi       : function(){
        return "Hi there";
    }
};
// or a better way is to use a factory function
// ### Factory Functions
var createPerson = function(firstName, lastName) {
    return {
        firstName   : firstName,
        lastName    : lastName,
        sayHi       : function(){
            return "Hi there";
        }
    };
};
var johnDoe = createPerson("John", "Doe");
var janeDoe = createPerson("Jane", "Doe");

// ## The this keyword
var person = {
    name   : "John Doe",
    greet       : function(){
        return "My name is " + person.name;
    }
};

// use the this keyword
var johnDoe = {
    name   : "John Doe",
    greet       : function(){
        return "My name is " + this.name;
    }
};
johnDoe.greet(); // -> My name is John Doe

//
var name = "Jane Doe";
var globalGreet = function(){
        return "My name is " + this.name; // name refers to the context
};
globalGreet(); // -> My name is Jane Doe

var johnDoe = {
    name    : "John Doe"
    greet   : globalGreet;
}
johnDoe.globalGreet; // -> My name is John Doe

// disable context
window.name = "Jane Doe";

var globalGreet = function(){
        return "My name is " + this.name; // name refers to the context
};
// to bind globalGreet function inside johnDoe with the global name
var johnDoe = {
    name    : "John Doe",
    greet   : window.globalGreet.bind(window)  // -> My name is Jane Doe
}

// simulate CallBack-Scenario

var makeRequest = function(url, callback) {
    // make the request with the provided URL
    var data = 10; // json text xml

    callback(data);
};

var obj = {
    someValue   : 20,
    loadData    : function(data) {
        var sum = this.someValue + data;
        alert(sum);
    },
    prepareRequest  : function() {
        var url = "http://numberservice.com";
        makeRequest(url, this.loadData.bind(this));
    }
};



