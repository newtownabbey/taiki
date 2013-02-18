// # Eloquent Javascript Tutorial
// ## Functional Programming


// [Chapter 6](http://eloquentjavascript.net/chapter6.html)

// It is easy to write a function that goes over an array and prints out every element:

function printArray(array) {
    for (var i = 0; i < array.length; i++)
        print(array[i])
}

// But what if we want to do something else than print? Since 'doing something' can be represented as a function, and functions are also values, we can pass our action as a function value:
function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

/* forEach(["Wampeter", "Foma", "Granfalloon"], alert); */

// And by making use of an anonymous function, something just like a for loop can be written with less useless details:

// Note that the variable total is visible inside the anonymous function because of the lexical scoping rules. Also note that this version is hardly shorter than the for loop and requires a rather clunky }); at its end . the brace closes the body of the anonymous function, the parenthesis closes the function call to forEach, and the semicolon is needed because this call is a statement.
//
// You do get a variable bound to the current element in the array, number, so there is no need to use numbers[i] anymore, and when this array is created by evaluating some expression, there is no need to store it in a variable, because it can be passed to forEach directly.

function sum(numbers) {
    var total = 0;
    forEach(numbers, function (number) {
        total += number;
    });
    return total;
}
alert(sum([1, 10, 100]));

// Let us look at a few more basic algorithms related to arrays. The sum function is really a variant of an algorithm which is usually called reduce or fold:
// reduce combines an array into a single value by repeatedly using a function that combines an element of the array with a base value. This is exactly what sum did, so it can be made shorter by using reduce... except that addition is an operator and not a function in JavaScript, so we first had to put it into a function.
//
// The reason reduce takes the function as its first argument instead of its last, as in forEach, is partly that this is tradition . other languages do it like that . and partly that this allows us to use a particular trick, which will be discussed at the end of this chapter. It does mean that, when calling reduce, writing the reducing function as an anonymous function looks a bit weirder, because now the other arguments follow after the function, and the resemblance to a normal for block is lost entirely.
//
function reduce(combine, base, array) {
    forEach(array, function (element) {
        base = combine(base, element);
    });
    return base;
}

function add(a, b) {
    return a + b;
}

function sum2(numbers) {
    return reduce(add, 0, numbers);
}

alert(sum2([1, 10, 100]));

// Ex. 6.1: Write a function countZeroes, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it. Use reduce.
// The weird part, with the question mark and the colon, uses a new operator. In chapter 2 we have seen unary and binary operators. This one is ternary . it acts on three values. Its effect resembles that of if/else, except that, where if conditionally executes statements, this one conditionally chooses expressions. The first part, before the question mark, is the condition. If this condition is true, the expression after the question mark is chosen, 1 in this case. If it is false, the part after the colon, 0 in this case, is chosen.
//
// Use of this operator can make some pieces of code much shorter. When the expressions inside it get very big, or you have to make more decisions inside the conditional parts, just using plain if and else is usually more readable.
function countZeroes(array) {
    function counter(total, element) {
        return total + (element === 0 ? 1 : 0);
    }
    return reduce(counter, 0, array);
}

// Then, write the higher-order function count, which takes an array and a test function as arguments, and returns the amount of elements in the array for which the test function returned true. Re-implement countZeroes using this function.


function count(test, array) {
    return reduce(function(total, element) {
        return total + (test(element) ? 1 : 0);
    }, 0, array);
}

function equals(x) {
    return function(element) {return x === element;};
}

function countZeroes(array) {
    return count(equals(0), array);
}


// One other generally useful 'fundamental algorithm' related to arrays is called map. It goes over an array, applying a function to every element, just like forEach. But instead of discarding the values returned by function, it builds up a new array from these values.

function map(func, array) {
    var result = [];
    forEach(array, function (element) {
        result.push(func(element));
    });
    return result;
}

alert(map(Math.round, [0.01, 2, 9.89, Math.PI]));


