const a = [ 1, 3, 4, 7, 11, 19, 31 ];
const b = [ 1, 2, 7, 19, 28, 31 ];

const c = [1, 2, 2, 3];
const d = [2, 2, 2, 2];

function findEqualElements(arr1, arr2) {
	let result = [];

	for (let i = 0, j = 0; i < arr1.length; i++) {

		for (; j < arr2.length; j++) {

			if (arr1[i] === arr2[j]) {
				result.push(arr1[i]);
				break;
			}

			if (arr2[j] > arr1[i]) {
				break;
			}
		}
	}

	console.log(result);
	return result;
}


// Примеры
// findEqualElements(a, b) // => [2, 7, 19, 31]
// findEqualElements(c, d) // => [2, 2]
