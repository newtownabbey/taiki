// # Eloquent Javascript Tutorial


// [Chapter 3](http://eloquentjavascript.net/chapter3.html)

// The defining properties of pure functions are that they always return the same value when given the same arguments, and never have side effects. They take some arguments, return a value based on these arguments, and do not monkey around with anything else.


// In JavaScript, addition is an operator, but it could be wrapped in a function like this (and as pointless as this looks, we will come across situations where it is actually usefu):

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

// The keyword function is always used when creating a new function. When it is followed by a variable name, the resulting function will be stored under this name. After the name comes a list of argument names, and then finally the body of the function. Unlike those around the body of while loops or if statements, the braces around a function body are obligatory.


// The keyword return, followed by an expression, is used to determine the value the function returns. When control comes across a return statement, it immediately jumps out of the current function and gives the returned value to the code that called the function. A return statement without an expression after it will cause the function to return undefined.

// A body can, of course, have more than one statement in it. Here is a function for computing powers (with positive, integer exponents):

function power(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}

console.log(power(2,10));

// ## Ex. 3.1
// Write a function called absolute, which returns the absolute value of the number it is given as its argument. The absolute value of a negative number is the positive version of that same number, and the absolute value of a positive number (or zero) is that number itself.

function absolute(number) {
    var absolute = Number(number);
    if (absolute > 0)
        return number;
    else
        return number * (-1);

}

console.log(absolute(2));
console.log(absolute(-1));

// ### Recursion
// To wrap your head around this, you should consider functions to not just package up a computation, but also an environment. Top-level functions simply execute in the top-level environment, that much is obvious. But a function defined inside another function retains access to the environment that existed in that function at the point when it was defined.
//
// Thus, the add function in the above example, which is created when makeAddFunction is called, captures an environment in which amount has a certain value. It packages this environment, together with the computation return number + amount, into a value, which is then returned from the outer function.
//
// When this returned function (addTwo or addFive) is called, a new environment.-in which the variable number has a value.-is created, as a sub-environment of the captured environment (in which amount has a value). These two values are then added, and the result is returned.
//
function makeAddFunction(amount) {
    function add(number) {
       return number * amount;
    }
    return add;
}

var addTwo = makeAddFunction(2);
console.log(addTwo(3));

// Consider this puzzle: By starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite amount of new numbers can be produced. How would you write a function that, given a number, tries to find a sequence of additions and multiplications that produce that number?
//
// For example, the number 13 could be reached by first multiplying 1 by 3, and then adding 5 twice. The number 15 can not be reached at all.
//

function findSequence(goal) {
    function find(start, history) {
        if (start == goal)
            return history;
        else if (start > goal)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") ||
            find(start * 3, "(" + history + " * 3)");
                        }
        return find(1, "1");
}

console.log(findSequence(24));

// ## Ex 3.2
//
// Write a function greaterThan, which takes one argument, a number, and returns a function that represents a test. When this returned function is called with a single number as argument, it returns a boolean: true if the given number is greater than the number that was used to create the test function, and false otherwise.
//

function greaterThan(number) {
    function comparevalue(value) {
        if (value > number)
            return true;
        else
            return false;
    }
    return comparevalue;
}

var compare = greaterThan(3);
console.log(compare(5));



