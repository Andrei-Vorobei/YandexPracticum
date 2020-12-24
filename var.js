"use strict";

const badResult = () => {
	for (var i = 0; i < 10; i++) {
		setTimeout(function () {
			console.log(i);
		}, 10);
	}
};

const iifeSolution = () => {
	// Предложите вариант через IIFE
	for (var i = 0; i < 10; i++) {
		((i) => {
			setTimeout(function () {
				console.log(i);
			}, 10);
		})(i);
	}
};

function es6Solution() {
	for (let i = 0; i < 10; i++) {
		setTimeout(function () {
			console.log(i);
		}, 10);
	}
}

const bindSolution = function () {
	for (var i = 0; i < 10; i++) {
		setTimeout(console.log.bind(this, i), 10);
	}
};

//badResult();
// es6Solution();
// iifeSolution();
// bindSolution();
