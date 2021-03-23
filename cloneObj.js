export default function cloneObj(obj) {
	if (!obj) {
		return obj;
	}

	let result;

	if (obj.constructor === Object) {
		result = {};
	} else if (obj.constructor === Array) {
		result = [];
	} else {
		return obj;
	}

	if (Object.keys(obj).length === 0) {
		return result;
	}

	Object.entries(obj).forEach(([key, value]) => {
		if (value && (value.constructor === Object || obj.constructor === Array)) {
			result[key] = cloneObj(value);
		} else {
			result[key] = value;
		}
	});
	
	return result;
}