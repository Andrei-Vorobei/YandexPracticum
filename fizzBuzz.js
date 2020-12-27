"use strict";

function fizzBuzz(num) {

	const result = [];

	for (let i = 0; i <= num; i++) {

		if (i === 0) {
			result.push(0);

		} else if (i % 3 === 0 && i % 5 === 0) {
			result.push('fizzbuzz');
			
		} else if (i % 3 === 0) {
			result.push('fizz');
			
		} else if (i % 5 === 0) {
			result.push('buzz');
			
		} else {
			result.push(i);
		}
	}

	return result;
}

console.log(fizzBuzz(6)); // [0, 1, 2, fizz, 4, buzz, fizz]
