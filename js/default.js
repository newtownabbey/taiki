/* Author:

*/


log(f1("one", 2, 9));
//log(f2());

function f1() {
    debugger;
    
}

/* 
var f2 = function () {

};
*/

/**
 * Function scope
 */
var ops = {
	add : function addNumbers(n1,n2) {
		return n1 + n2;
	}
};

var x = ops.add(3,5); // x == 8
var y = ops.addNumbers(3,5); // not valid

/**
 * Functions in Functions
 */
function outerFunction(n) {
	function innerFunction() {
		return n * n;
	}
	return innerFunction();
}

var x = outerFunction(4); // x == 16
// inner Function cannot be called directly


/**
 * Immediate Functions
 */

 (function() { }());

 (function() { })();

/**
 * Module Pattern uses Immediate Functions
 */

var mod = (function() {
	var m = 2000, c = 0, d = 10, y = 2;
	return {
		getHiddenYear : function() { // anonymous function because of the lack of the function name here 
			return m + c + d + y;
		}
	}
}());

var x = mod.getHiddenYear(); // calling the immediate Function x == 2012
// not possible to call mod.m, mod.c etc.
/** 
 * Because this function is returning a value, 
 * it returns an object and inside the object it has a method in it getHiddenYear
 */ 

