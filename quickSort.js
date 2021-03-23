function partition(arr, start = 0, end = arr.length - 1) {
	const pivotValue = arr[end];

	let pivotIndex = start;

	for (let i = start; i < end; i++) {
		if (arr[i] <= pivotValue) {
			swap(arr, i, pivotIndex);

			pivotIndex++;
		}
	}

	swap(arr, end, pivotIndex);

	return pivotIndex;
}

function swap(arr, i, j) {
	const tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function quickSort(arr, start = 0, end = arr.length - 1) {

	if (start < end) {
		const pivotIndex = partition(arr, start, end);
	
		quickSort(arr, start, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, end);
	}

	return arr;
}