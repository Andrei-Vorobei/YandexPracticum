"use strict";

Number.prototype.plus = function (n) {
	console.log(n);
	return this + n;
}

Number.prototype.minus = function (n) {
	console.log(n);
	return this - n;
};

(2).plus(3).minus(1) // 4
