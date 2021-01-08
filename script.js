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

function queue(...fns) {
	fns.reduce((acc, fn) => {
		return new Promise(resolve => {
			acc.then(() => fn(resolve));
		}).then(res => console.log(res));
	}, Promise.resolve());
}
