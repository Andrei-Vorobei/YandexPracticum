class Stack {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	// Кладёт элемент на стек.
	// Возвращает новый размер стека.
	push(value) {
		const node = { value, next: null, prev: null };
		
		if (this.size === 0) {
			this.head = this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}

		return ++this.size;
	}

	// Убирает элемент со стека.
	// Если стек пустой, кидает ошибку.
	// Возвращает удалённый элемент.
	pop() {
		if (this.size === 0) {
			throw new Error('stack is empty')
		}

		const node = this.tail;

		if (this.size === 1) {
			this.head = this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			node.prev = node.next = null;
		}

		this.size--;

		return node;
	}

	// Возвращает верхний элемент стека без его удаления.
	peek() {
		return this.tail;
	}

	// Если стек пуст, возвращает true. В противном случае –– false.
	isEmpty() {
		return !this.size;
	}
}

const stack = new Stack();

console.log(stack);

stack.push('first value');
stack.push('second value');
stack.push('third value');

console.log(stack);

console.log(stack.pop());
console.log(stack.pop());
// console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());

console.log(stack);

class Queue {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	// Ставит элемент в очередь.
	// Возвращает новый размер очереди.
	enqueue(value) {
		const node = { value, next: null, prev: null };
		
		if (this.size === 0) {
			this.head = this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}

		return ++this.size;
	}

	// Убирает элемент из очереди.
	// Если очередь пустая, кидает ошибку.
	// Возвращает удалённый элемент.
	dequeue() {
		if (this.size === 0) {
			throw new Error('queue is empty');
		}

		const node = this.head;

		if (this.size === 1) {
			this.head = this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			node.prev = node.next = null;
		}

		this.size--;

		return node;
	}

	// Возвращает элемент в начале очереди.
	peek() {
		return this.head;
	}

	// Если очередь пустая, возвращает true. В противном случае –– false.
	isEmpty() {
		return !this.size;
	}
}

const queue = new Queue();

console.log(queue);

console.log(queue.enqueue('first item'));
console.log(queue.enqueue('second item'));
console.log(queue.enqueue('third item'));

console.log(queue.dequeue());
console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

console.log(queue.peek());

console.log(queue);