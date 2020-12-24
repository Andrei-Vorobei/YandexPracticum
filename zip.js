"use strict";

function zip(...args) {
	return args.reduce((acc, obj) => {

		Object.entries(obj).forEach(([key, val]) => {
			if (acc[key] === undefined) {
				acc[key] = val;
			}
		});

		return acc;
	}, {})
}
