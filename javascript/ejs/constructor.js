// # helephant Javascript Tutorial

// [Constructor functions](http://helephant.com/2008/09/14/constructor-functions/)

// ## Constructor functions
//
// The object literal syntax is great for setting up one off objects but sometimes you.ll want to mass produce objects that all have the same properties and methods. It would be a pain to have to set up each object individually so instead you can use a constructor function to do it for you.
//
// There's nothing that makes a constructor function different from a regular javascript function. It's just an ordinary function that has the logic needed to create a new object instead of regular program logic. It's not a special language construct like a class is in Java or C#.
//
// Here's a simple example of a constructor function for building a pet object:
// Notice that the logic inside the constructor function is almost exactly the same as the logic for building a simple object. The only difference is that the properties are being assigned to "this" rather than to a newly created object. The this keyword is a special javascript operator that gives you a reference to the object that is being created. This is called the function's context.

function Pet(name, species, hello){
    this.name = name;
    this.species = species;
    this.hello = hello;
    this.sayHello = function()
    {
        alert(this.hello);
    }
}

// ### The new operator
//
// The constructor function itself won't create a new object. You need to call it with the new operator. The new operator takes care of creating a new object, passing it to the constructor function and returning it when the function is finished.
// }it with the new operator. The new operator takes care of creating a new object, passing it to the constructor function and returning it when the function is finished.
// }it with the new operator. The new operator takes care of creating a new object, passing it to the constructor function and returning it when the function is finished.
//
// The syntax should look pretty familiar to most OO programmers, particularly anyone with a C# or java background:
// You could actually call any javascript function with the new operator and it would act in the same way. Functions that aren't constructors would just return an empty object because they wouldn't have the logic for instantiating the object.

var rufus = new Pet("Rufus", "cat", "miaow");
rufus.sayHello();


// ### Objects maintain a link to the function that created them
//
// The only difference between an object created by a constructor and an object created from scratch is objects created by constructor function always maintains a link back to the function that created it.
//
// You can find out what an object's constructor was by accessing it's constructor property. The constructor property of an object that's not created with a custom constructor function will point to the Object constructor.
//
// This is important for supporting javascript's prototypal inheritance.

// ### Constructor functions aren't classes
//
// Constructor functions look a lot like classes in other languages but they.re not. In a language like Java or C# a class is synonymous with a data type. It gives you guarantees about what properties and methods the instances of the classes will have.
//
// All a constructor function gives you is an object that has been instantiated in a particular way. After that the object can then be changed in whatever way you want. It is not obliged to be anything like the other objects that were created by the constructor function. There is no promise that it will contain any particular properties or methods.
//
var rufus = new Pet("Rufus", "cat", "miaow");
alert(rufus.constructor.toString());


