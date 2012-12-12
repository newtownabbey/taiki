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


var ops = {
	add : function addNumbers(n1,n2) {
		return n1 + n2;
	}
};

var x = ops.add(3,5); // x == 8
var y = ops.addNumbers(3,5); // not valid