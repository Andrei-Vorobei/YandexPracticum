"use strict";

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