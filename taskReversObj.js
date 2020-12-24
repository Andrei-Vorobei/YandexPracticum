"use strict";

function invert(obj) {
	return Object.entries(obj).reduce((result, [key, val]) => {
		return {
			...result,
			[val]: key
		};
	}, {});
}

const obj = {
	name: 'And',
	age: 36
};

console.log(invert(obj));