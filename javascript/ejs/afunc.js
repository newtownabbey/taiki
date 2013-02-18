// # helephant Javascript Tutorial
// ## Javascript Anonymous Function


// [Anonymous Function](http://helephant.com/2008/08/23/javascript-anonymous-functions/)

// Anonymous functions are functions that are dynamically declared at runtime. They.re called anonymous functions because they aren't given a name in the same way as normal functions.
//
// Anonymous functions are declared using the function operator. You can use the function operator to create a new function wherever it's valid to put an expression. For example you could declare a new function as a parameter to a function call or to assign a property of another object.
//
// The function operator returns a reference to the function that was just created. The function can then be assigned to a variable, passed as a parameter or returned from another function. This is possible because functions are first class objects in javascript.

// Here's an example where a function is declared in the regular way using the function statement:
function eatCake(){
    alert("So delicious and moist");
};
eatCake();

// Here's an example where the same function is declared dynamically using the function operator:
var eatCakeAnon = function(){
    alert("So delicious and moist");
};
eatCakeAnon();

// Why is this useful?
// Declaring single use functions
// Anonymous functions can help make code more concise when declaring a function that will only be used in one place. Rather than having to declare the function and then use it, you can do both in one step. It's particularly useful for wiring up event handlers and creating methods in constructor functions.
//
// For example, a constructor function will need to create methods for the object it is creating. It's possible to declare the function using the function statement and then assign it to a variable as a separate step like this:
function Pet(name, species, hello){
    this.name = name;
    this'species = species;
    this.hello = hello;
    function sayHello()
    {
        alert(this.hello);
    }
    this'sayHello = sayHello;
}
// But it's more concise to use the function operator do it in one step:
function Pet2(name, species, hello){
    this.name = name;
    this'species = species;
    this.hello = hello;
    this'sayHello = function()
    {
        alert(this.hello);
    }
}

// Anonymous functions are also really handy when you need to pass a little bit of code to a another function. If the function you need is very short, it's often convenient to declare it when you call the function you want to pass it to:

window.addEventListener("load",
        function() { alert("All done");},
        false);


// Variables are scoped at the function level in javascript. This is different to what you might be used to in a language like C# or Java where the variables are scoped to the block. What this means is if you declare a variable inside a loop or an if statement, it will be available to the entire function.
//
// If you ever find yourself needing to explicitly scope a variable inside a function you can use an anonymous function to do this. You can actually create an anonymous function and then execute it straight away and all the variables inside will be scoped to the anonymous function:
(function() {
    var myProperty = "hello world";
    alert(myProperty);
})();
alert(typeof(myProperty));
// Some people use this if they want to do some processing the global scope but don't want to add new members.

// ### Dynamic programming

// One of the big differences between javascript and more traditional languages like C# is that javascript is dynamic. Anonymous functions is one of the big ways to take advantage of that in your code.
//
// Imagine that you.re an programmer who has created a new type of textbox that filters the user's input based on data type. So you can say that the user is only allowed to enter numbers into the textbox and any other characters will be filtered. You.re using the ASP.NET ajax framework (because the place you work is a Microsoft shop and you have to) and the convention for ASP.NET ajax server controls is to use a get/set method to access any properties on your object.
//
// Your textbox has three different properties (maxLength, cssClass and dataType) which means six boring little methods you have to write that will just clutter up your textbox's javascript declaration and won't really add anything to the logic.
//
// Here's a bit of a subversive idea.. why don't we get the computer to do the work? Why don't we make the textbox automatically generate the get/set methods from the properties when it initializes itself? That way we can have six less methods in our javascript object and if we add another property it will automatically get the methods.
//
// This example creates an init function that takes a list of server properties and values and then creates a getter and setter on the object for each one. This is possible because we can create as many new anonymous functions as we like at runtime:

$helephant.components = {
    init : function(object, serverProperties)
    {
        for(var property in serverProperties)
        {
            $helephant.components.createGetter(textbox, property);
            $helephant.components.createSetter(textbox, property, serverProperties[property]);
        }
    },

    createGetter : function(object, property)
    {
        var propertyName = "get_" + property;
        if(typeof(object.constructor.prototype[propertyName]) == "undefined")
        {
            object.constructor.prototype[propertyName] = function()
            {
                return this[property];
            };
        }
    },

    createSetter : function(object, property, initialValue)
    {
        var propertyName = "set_" + property;
        if(typeof(object.constructor.prototype[propertyName]) == "undefined")
        {
            object.constructor.prototype[propertyName] = function(value)
            {
                this[property] = value;
            };
        }
        if(typeof(initialValue) != "undefined")
            object[propertyName](initialValue);
    }
}

// The code that calls the methods never needs to know they were dynamically generated. It calls them in exactly the same way as a usual method:
var maxLength = textbox.get_maxLength();
textbox'set_cssClass("redAlert");

// Another example of this is in the JQuery library where they set up the convenient helper methods for binding to events from a list of events that are supported:

jQuery.each( ("blur,focus,load,resize,scroll,unload,click,dblclick," +
            "mousedown,mouseup,mousemove,mouseover,mouseout,change,select," +
            "submit,keydown,keypress,keyup,error")'split(","), function(i, name){

    Handle event binding
    jQuery.fn[name] = function(fn){
        return fn ? this.bind(name, fn) : this'trigger(name);
    };
});

// This may look a little unfamiliar to people who are used to statically typed languages like C#. What you have to remember is that you don't get the static typed safety in javascript whatever you do because javascript doesn't work like that. The only thing you can do is try to get the most out of the language features that javascript does have.

