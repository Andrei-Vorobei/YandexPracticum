"use strict";

function foo(callback) {
	setTimeout(function () {
		callback('A');
	}, Math.random() * 100);
}

function bar(callback) {
	setTimeout(function () {
		callback('B');
	}, Math.random() * 100);
}

function baz(callback) {
	setTimeout(function () {
		callback('C');
	}, Math.random() * 100);
}

queue(foo, bar, baz);

function cb(str) {
	console.log(str);
}

function queue(...fns) {

	fns.reduce((acc, fn) => {

		if (!acc) {
			console.log(fn);

			return new Promise(resolve => resolve(fn(cb)));
		} else {
			console.log(fn);

			return new Promise(resolve => acc.then(() => resolve(fn(cb))));
		}

	}, null);
}
