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
					return Array( Math.abs(start) ).fill()
						.map((_, i) => i === 0 ? 0 : -i).reverse();
				} else {
					return Array( Math.abs(start) ).fill().map((_, i) => i === 0 ? 0 : -i);
				}
			} else {
				if (isRight) {
					return Array( start ).fill().map((_, i) => i).reverse();
				} else {
					return Array( start ).fill().map((_, i) => i);
				}
			}
		}
	} else {
		if (step === 0) {
			return Array( Math.abs( end ) - Math.abs( start ) ).fill(start)
		} else {
			if (isRight) {
				return Array( Math.abs( end ) - Math.abs( start ) ).fill()
					.map((_, i) => end < 0 ? -(i + start) : i + start)
					.filter((num, i) => i % step === 0).reverse();
			} else {
				return Array( Math.abs( end ) - Math.abs( start ) ).fill()
					.map((_, i) => end < 0 ? -(i + start) : i + start)
					.filter((num, i) => i % step === 0);
			}
		}
	}
}

