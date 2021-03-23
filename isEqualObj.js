export default function isEqualObj(a, b) {
	if (!a || !b || typeof a !== 'object' || typeof b !== 'object') {
		 throw new Error('args must be objects');
	}
	if (Object.keys(a).length !== Object.keys(b).length) {
		 return false;
	}
	function validate(obj) {
		 if (typeof obj === 'object' && obj !== null) {
			  return true;
		 }
		 else {
			  return false;
		 }
	}
	let result = true;
	Object.entries(a).forEach(([key, val]) => {
		 if (result) {
			  if (validate(val) || validate(b[key])) {
					result = isEqualObj(val, b[key]);
			  }
			  else {
					result = val === b[key];
			  }
		 }
	});
	return result;
}