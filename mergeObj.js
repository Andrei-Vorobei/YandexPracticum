function mergeObj(lhs, rhs) {
	function isObject(obj) {
		if (typeof obj === 'object' && obj !== null) {
			return true;
		} else {
			return false;
		}
	}

	if (!rhs || typeof rhs !== 'object') {
		throw new Error('args must be objects');
	}

	if (!lhs && rhs.constructor === Object) {
		lhs = {};
	}

	if (!lhs && rhs.constructor === Array) {
		lhs = [];
	}

	Object.entries(rhs).forEach(([key, value]) => {

		if (isObject(value) && (isObject(lhs[key]) || lhs[key] === undefined)) {
			lhs[key] = mergeObj(lhs[key], value);
		} else {
			lhs[key] = value;
		}
	});

	return lhs;
}