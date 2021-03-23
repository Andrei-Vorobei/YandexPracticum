class BinaryHeap {
	constructor() {
		this.data = [];
	}

	insert(node) {
		this.data.push(node);

		this.bubbleUp(this.data.length - 1)
	}

	extract() {
		if (this.data.length === 0) return undefined;
		if (this.data.length === 1) return this.data.pop();

		const extractedNode = this.data[0];
		const sinkDownNode = this.data.pop();

		this.data[0] = sinkDownNode;

		this.sinkDown()

		return extractedNode;
	}

	bubbleUp(index) {

		if (!this.getParent(index)) {
			return false;
		}

		const { parent, parentIndex } = this.getParent(index);
		const bubbleNode = this.data[index];

		if (bubbleNode < parent) {
			return;
		}
		else {
			this.data[parentIndex] = bubbleNode;
			this.data[index] = parent;
			this.bubbleUp(parentIndex);
		}

	}

	sinkDown(index = 0) {
		if (!this.getLeft(index) && !this.getRight(index)) {
			return;
		}

		const sinkDownNode = this.data[index];

		if (this.getLeft(index) && this.getRight(index)) {
			const {leftChild, leftChildIndex} = this.getLeft(index);
			const {rightChild, rightChildIndex} = this.getRight(index);
			
			if (sinkDownNode > leftChild && sinkDownNode > rightChild) return;
	
			if (leftChild > rightChild) {
				this.data[leftChildIndex] = sinkDownNode;
				this.data[index] = leftChild;
				this.sinkDown(leftChildIndex);
			}
			else {
				this.data[rightChildIndex] = sinkDownNode;
				this.data[index] = rightChild;
				this.sinkDown(rightChildIndex);
			}
		}
		
		if (!this.getLeft(index)) {
			const {rightChild, rightChildIndex} = this.getRight(index);

			if (sinkDownNode > rightChild) return;

			this.data[rightChildIndex] = sinkDownNode;
			this.data[index] = rightChild;
			this.sinkDown(rightChildIndex);
		}

		if (!this.getRight(index)) {
			const {leftChild, leftChildIndex} = this.getLeft(index);

			if (sinkDownNode > leftChild) return;

			this.data[leftChildIndex] = sinkDownNode;
			this.data[index] = leftChild;
			this.sinkDown(leftChildIndex);
		}
	}

	getLeft(i) {
		const leftChildIndex = 2 * i + 1;

		if (!this.isValideIndex(leftChildIndex)) {
			return false;
		}

		const leftChild = this.data[leftChildIndex];

		return {leftChild, leftChildIndex};
	}

	getRight(i) {
		const rightChildIndex = 2 * i + 2;

		if (!this.isValideIndex(rightChildIndex)) {
			return false;
		}

		const rightChild = this.data[rightChildIndex];

		return {rightChild, rightChildIndex};
	}

	getParent(i) {
		const parentIndex = Math.floor((i - 1) / 2);

		if (!this.isValideIndex(parentIndex)) {
			return false;
		}

		const parent = this.data[parentIndex];

		return { parent, parentIndex };
	}

	isValideIndex(i) {
		if (i < 0 || i >= this.data.length) {
			return false;
		}
		else {
			return true;
		}
	}
}

const heap = new BinaryHeap();

heap.insert(55);
heap.insert(45);
heap.insert(65);
heap.insert(15);
heap.insert(75);
heap.insert(35);

console.log(heap.data);
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());