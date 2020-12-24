"use strict";

function canGetCount(N) {
	let count = N;

	return () => {
		
		if (count > 0) {
			count--;
			return 'yes';
		} else {
			return 'no';
		}
	}
}

const getOne = canGetCount(2);

console.log(getOne());
console.log(getOne());
console.log(getOne());
console.log(getOne());
console.log(getOne());
console.log(getOne());
console.log(getOne());
