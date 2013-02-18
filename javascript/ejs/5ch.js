// # Eloquent Javascript Tutorial
// ## Error Handling


// [Chapter 5](http://eloquentjavascript.net/chapter5.html)

// What if the function can already return every possible kind of value?
// So did the array have a last element? Looking at the value lastElement returns, it is impossible to say.

var lastElement = function(array) {
    if (array.length > 0)
        return array[array.length - 1];
    else
        return undefined;
}

console.log(lastElement([1, 2, undefined]));

// The theory behind exception handling goes like this: It is possible for code to raise (or throw) an exception, which is a value. Raising an exception somewhat resembles a super-charged return from a function . it does not just jump out of the current function, but also out of its callers, all the way up to the top-level call that started the current execution.
//  Fortunately, it is possible to set obstacles for exceptions along the stack. These 'catch' the exception as it is zooming down, and can do something with it, after which the program continues running at the point where the exception was caught.
//  Note that the function lastElementPlusTen completely ignores the possibility that lastElement might go wrong. This is the big advantage of exceptions . error-handling code is only necessary at the point where the error occurs, and the point where it is handled. The functions in between can forget all about it.
//
// Well, almost.

function lastElement2(array) {
    if (array.length > 0)
        return array[array.length - 1];
    else
        throw "Can not take the last element of an empty array.";
}

function lastElementPlusTen(array) {
    return lastElement2(array) + 10;
}

try {
    console.log(lastElementPlusTen([]));
}

catch (error) {
    console.log("Something went wrong: ", error);
}

/* lastElementPlusTen([1]); */

// Consider the following: A function processThing wants to set a top-level variable currentThing to point to a specific thing while its body executes, so that other functions can have access to that thing too. Normally you would of course just pass the thing as an argument, but assume for a moment that that is not practical. When the function finishes, currentThing should be set back to null.
// But what if the complicated processing raises an exception? In that case the call to processThing will be thrown off the stack by the exception, and currentThing will never be reset to null.

var currentThing = null;

function processThing(thing) {
    if (currentThing != null)
        throw "Oh no! We are already processing a thing!";

    currentThing = thing;
    /* do complicated processing... */
    currentThing = null;
}

// try statements can also be followed by a finally keyword, which means 'no matter what happens, run this code after trying to run the code in the try block'. If a function has to clean something up, the cleanup code should usually be put into a finally block:

function processThing(thing) {
    if (currentThing != null)
        throw "Oh no! We are already processing a thing!";

    currentThing = thing;
    try {
        /* do complicated processing... */
    }
    finally {
        currentThing = null;
    }
}


// some tests:
var errorTest = function(name) {
    console.log("hallo " + name );
}

errorTest("Ulrich");
/*
   try {
   var errorTest2 = function(name) {
   console.log("hallo " + name );
   }

   }
   errorTest2("Uli");
   */

try {
    console.log(Foo);
}

catch (error) {
    console.log("Caught: " + error.message);

}


// Most programmers consider exceptions purely an error-handling mechanism. In essence, though, they are just another way of influencing the control flow of a program. For example, they can be used as a kind of break statement in a recursive function. Here is a slightly strange function which determines whether an object, and the objects stored inside it, contain at least seven true values.
// The inner function count is recursively called for every object that is part of the argument. When the variable counted reaches seven, there is no point in continuing to count, but just returning from the current call to count will not necessarily stop the counting, since there might be more calls below it. So what we do is just throw a value, which will cause the control to jump right out of any calls to count, and land at the catch block.
//
//  But just returning true in case of an exception is not correct. Something else might be going wrong, so we first check whether the exception is the object FoundSeven, created specifically for this purpose. If it is not, this catch block does not know how to handle it, so it raises it again.
//
//  This is a pattern that is also common when dealing with error conditions . you have to make sure that your catch block only handles exceptions that it knows how to handle. Throwing string values, as some of the examples in this chapter do, is rarely a good idea, because it makes it hard to recognise the type of the exception. A better idea is to use unique values, such as the FoundSeven object, or to introduce a new type of objects, as described in chapter 8.

var FoundSeven = {};

function hasSevenTruths(object) {
    var counted = 0;

    function count(object) {
        for (var name in object) {
            if (object[name] === true) {
                counted++;
                if (counted == 7)
                    throw FoundSeven;
            }
            else if (typeof object[name] == "object") {
                count(object[name]);
            }
        }
    }

    try {
        count(object);
        return false;
    }
    catch (exception) {
        if (exception != FoundSeven)
            throw exception;
        return true;
    }
}
