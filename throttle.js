const someCalc = function (a) {
	console.log(a + this.b)
};

function throttle(callback, wait, context = this) {
	let isTrottled = false;
	let lastArgs = null;
	let lastContext = null;

	return (...args) => {

		if (isTrottled) {
			lastArgs = args;
			lastContext = context;
			return;
		}

		callback.apply(context, args);
		isTrottled = true;

		setTimeout(() => {
			isTrottled = false;
			if (lastArgs) {
				callback.apply(lastContext, lastArgs);
				lastArgs = lastContext = null;
			}
		}, wait);
	}
}

// затормозить функцию до одного раза в 1000 мс
const f1000 = throttle(someCalc, 1000, { b: ' call' });
f1000(1); // выведет 1 call
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

 // когда пройдёт 1000 мс...
 // выведет 3 call, промежуточное значение 2 call игнорируется