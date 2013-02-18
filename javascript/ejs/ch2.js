// Eloquent Javascript Tutorial
// -------------------------------


// [Chapter 2](http://eloquentjavascript.net/chapter2.html)

// Showing a dialog window is a side effect. A lot of functions are useful because of the side effects they produce. It is also possible for a function to produce a value, in which case it does not need to have a side effect to be useful. For example, there is a function Math.max, which takes any number of numeric arguments and gives back the greatest:


alert(Math.max(2, 4) + 100);

// When a function produces a value, it is said to return it. Because things that produce values are always expressions in JavaScript, function calls can be used as a part of bigger expressions:
document.write("Math.min(2, 4) + 100");
console.log("Math.min(2, 4) + 100");
document.writeln(Math.min(2, 4) + 100);


