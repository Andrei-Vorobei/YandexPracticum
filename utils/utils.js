"use strict";

// Возвращает последний элемент массива
function last(list) {
	if (Array.isArray(list)) {

		const length = list.length;

		if (length > 0) {
			return list[length - 1];
		}
	} else {
		return undefined;
	}
}


// Возвращает первый элемент массива
function first(list) {
	if (Array.isArray(list)) {

		const length = list.length;

		if (length > 0) {
			return list[0];
		}
	} else {
		return undefined;
	}
}


// Возвращает массив с задаными параметрами
function rangeRight(start, end, step) {
	return range(start, end, step, true);
}


function range(start = 0, end, step = 1, isRight) {

	if (end === undefined) {
		if (start === 0) {
			return [];
		} else {
			if (start < 0) {
				if (isRight) {
					return Array(Math.abs(start)).fill()
						.map((_, i) => i === 0 ? 0 : -i).reverse();
				} else {
					return Array(Math.abs(start)).fill().map((_, i) => i === 0 ? 0 : -i);
				}
			} else {
				if (isRight) {
					return Array(start).fill().map((_, i) => i).reverse();
				} else {
					return Array(start).fill().map((_, i) => i);
				}
			}
		}
	} else {
		if (step === 0) {
			return Array(Math.abs(end) - Math.abs(start)).fill(start)
		} else {
			if (isRight) {
				return Array(Math.abs(end) - Math.abs(start)).fill()
					.map((_, i) => end < 0 ? -(i + start) : i + start)
					.filter((num, i) => i % step === 0).reverse();
			} else {
				return Array(Math.abs(end) - Math.abs(start)).fill()
					.map((_, i) => end < 0 ? -(i + start) : i + start)
					.filter((num, i) => i % step === 0);
			}
		}
	}
}


function isEmpty(value) {

	if (value === null || value === undefined) {
		console.log(`Значение переменной равно ${value}`);
		return true;
	} else {
		console.log(typeof value);

		switch (typeof value) {

			case 'number':
				return true;

			case 'boolean':
				return true;

			case 'string':
				if (value === '') {
					console.log('Пустая строка');
					return true;
				}

			case 'object':
				if (Array.isArray(value) && value.length === 0) {
					console.log('пустой массив');
					return true;
				} else {
					switch (value.constructor) {

						case Object:
							if (Object.keys(value).length === 0) {
								console.log('Пустой объект');
								return true;
							}

						case Map:
							if (value.size === 0) {
								console.log('Пустой Map');
								return true;
							}

						case Set:
							if (value.size === 0) {
								console.log('Пустой Set');
								return true;
							}

						default: break;
					}
				}

			default:
				console.log('notEmpty');
				return false;
		}
	}
}

// console.log('1', true === isEmpty(1));
// console.log('0', true === isEmpty(0));

// console.log('undefined = ', true === isEmpty(undefined));
// console.log('null = ', true === isEmpty(null));
// console.log('true = ', true === isEmpty(true));
// console.log('false = ', true === isEmpty(false));

// console.log('[] = ', true === isEmpty([]));
// console.log('[1, 2, 3] = ', false === isEmpty([1, 2, 3]));

// console.log('{} = ', true === isEmpty({}));
// console.log('{ a: 1 } = ', false === isEmpty({ a: 1 }));

// console.log('empty str = ', true === isEmpty(''));
// console.log('str = ', false === isEmpty('123'));

// console.log('new Map() = ', true === isEmpty(new Map()));
// console.log('new Map().set("1") = ', false === isEmpty(new Map().set('1')));

// console.log('new Set() = ', true === isEmpty(new Set()));
// console.log('new Set().add("1") = ', false === isEmpty(new Set().add('1')));


function binarySearch(list, element) {
	let startIndex = 0;
	let endIndex = list.length;

	while (startIndex < endIndex) {
		const middleIndex = Math.floor((startIndex + endIndex) / 2);
		const value = list[middleIndex];

		if (value === element) {
			return middleIndex;
		} else {

			if (value < element) {
				startIndex = middleIndex + 1;
			} else {
				endIndex = middleIndex;
			}
		}
	}

	return -1;
}

// const list = [1, 3, 4, 5, 7, 10];
// const list = [];

// console.log(binarySearch(list, 10));
// console.log(binarySearch(list, 99));


function palindrome(str) {

	let startIndex = 0;
	let endIndex = str.length - 1;

	while (startIndex < endIndex) {
		const firstChar = str[startIndex].toLowerCase();
		const endChar = str[endIndex].toLowerCase();

		if (firstChar === endChar) {
			startIndex++;
			endIndex--;
			continue;
		} else {
			return false;
		}
	}

	return true;
}

function palindromeRev(str) {
	const strRev = str.toLowerCase().split('').reverse().join('');

	if (str === strRev) {
		return true;
	} else {
		return false;
	}
}

// console.log(palindromeRev('racecar'));
// console.log(palindromeRev('table'));


