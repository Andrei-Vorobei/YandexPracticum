/*
function withDebounce(callback, ms) {

	let timeoutId;

	return (...args) => {

		const fn = () => {
			callback(...args);
		};

		timeoutId && clearTimeout(timeoutId);

		timeoutId = setTimeout(fn, ms);
	}

}
*/
const input = document.querySelector('input');

function test(e) {
	const input = e.target;
	const value = input.value;
	console.log(value);
}

// test = withDebounce(test, 510);


// input.oninput = test;


function debounce(f, ms) {

	let isCooldown = false;

	return function () {
		if (isCooldown) return;

		console.log('this: ', this);

		f.apply(this, arguments);

		isCooldown = true;

		setTimeout(() => isCooldown = false, ms);
	};
}

test = debounce(test, 510);


input.oninput = test;