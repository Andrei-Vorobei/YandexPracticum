class DoublyLinkedList {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	// Добавляет элемент в список.
	// Если указан индекс - добавляет по индексу, 
	// в противном случае добавляет в конец.
	// Если индекс за пределами — кидает ошибку.
	add(value, index) {
		const node = createNode(value);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			if (index === undefined || index === this.size) {
				this.tail.next = node;
				node.prev = this.tail;
				this.tail = node;
			} else {

				let result = this.searchByIndex(index);

				if (!result.prev) {
					node.next = result;
					result.prev = node;
					this.head = node;
				} else {
					node.next = result;
					node.prev = result.prev;
					node.prev.next = node;
					node.next.prev = node;
				}
			}
		}

		this.size++;

		return this;
	}

	// Удаляет элемент из списка по значению.
	// Удаляет только первый найденный элемент.
	// Если элемент не найден, ничего делать не нужно.
	removeByValue(value) {
		const result = this.searchByValue(value);

		if (result) {
			if (this.size === 1) {
				this.head === null
				this.tail === null
			} else {
				if (!result.prev) {
					this.head = this.head.next;
					this.head.prev = null;
				} if (!result.next) {
					this.tail = this.tail.prev;
					this.tail.next = null;
				} else {
					result.prev.next = result.next;
					result.next.prev = result.prev;
				}
			}

			this.size--;
		}

		return this;
	}

	// Удаляет элемент из списка по индексу.
	// Если индекс за пределами — кидает ошибку.
	removeByIndex(index) {
		if (index === undefined) {
			throw new Error('Не передан индекс в функцию')
		} else {
			let result = this.searchByIndex(index);

			if (this.size === 1) {
				this.head = null
				this.tail = null
			} else {
				if (!result.prev) {
					this.head = this.head.next;
					this.head.prev = null;
				} if (!result.next) {
					this.tail = this.tail.prev;
					this.tail.next = null;
				} else {
					result.prev.next = result.next;
					result.next.prev = result.prev;
				}
			}

			this.size--;
		}

		return this;
	}

	// Ищет элемент в списке по индексу.
	// Если индекс за пределами — кидает ошибку.
	searchByIndex(index) {
		if (index === undefined) {
			throw new Error('Не передан индекс в функцию поиска')
		} else {
			if (this.size === 0) {
				throw new Error('Список пуст');
			}

			if (index < 0 || index >= this.size) {
				throw new Error(`Индек должен быть не меньше 0 и меньше size ${this.size}`);
			}

			let result = this.head;

			for (let i = 0; i < index; i++) {
				result = result.next
			}

			return result;
		}
	}

	// Ищет элемент в списке по значению.
	// Возвращает первый найденный элемент.
	// Опционально можно указать индекс начала поиска.
	// Если индекс за пределами — кидает ошибку.
	// Если элемент не найден, нужно вернуть null.
	searchByValue(value, startIndex = 0) {
		if (this.size === 0) {
			throw new Error('Список пуст');
		}

		if (startIndex < 0 || startIndex >= this.size) {
			throw new Error(`Индек должен быть не меньше 0 и меньше size ${this.size}`);
		}

		if (startIndex === 0 && this.head.value === value) {
			return this.head;
		}

		let result = this.head;

		for (let i = 1; i < this.size; i++) {

			result = result.next;

			if (i < startIndex) {
				continue;
			}

			if (result.value === value) {
				return result;
			}
		}

		return null;
	}

	getList() {
		if (this.size === 0) {
			throw new Error('Список пуст');
		}

		let result = this.head;

		const arr = [result]

		while (result.next) {
			result = result.next;
			arr.push(result);
		}

		return arr;
	}

	clearList() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	toString() {
		let node = this.head;
		console.log('size:', this.size);
		for (let i = 0; i < this.size; i++) {
			let pre = '─';
			let next = '─';
			if (node.prev) pre = node.prev.value;
			if (node.next) next = node.next.value;
			console.log(
				`${i} ${''.padStart(4 * i)} └${pre}──%c${node.value}%c──${next}┐`,
				'color: gold;',
				'color: #ccc;'
			);
			node = node.next;
		}
	}
}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value) {
	return {
		value,
		next: null,
		prev: null,
	};
}


// TESTS ==========================================

const list = new DoublyLinkedList();

list.add('head');
list.add('1');
list.add('2');
list.add('3');
list.add('tail');

console.log(list);
console.log(list.getList());
list.toString();

// console.log(list.searchByIndex());
// console.log(list.searchByIndex(0));
// console.log(list.searchByIndex(2));
// console.log(list.searchByIndex(list.size - 1));

// list.add('test - index-head', 0);
// list.add('test - index-2', 2);
// list.add('test - index-tail', list.size - 1);
// list.add('test - index-tail', list.size);
// list.add('test-tail', -1);

// console.log(list.removeByIndex());
// console.log(list.removeByIndex(0));
// console.log(list.removeByIndex(0));
// console.log(list.removeByIndex(3));
// console.log(list.removeByIndex(list.size));
// console.log(list.removeByIndex(list.size - 1));
// console.log(list.removeByIndex(-3));

// console.log(list.searchByValue('head'));
// console.log(list.searchByValue('1'));
// console.log(list.searchByValue('1', 1));
// console.log(list.searchByValue('1', 2));
// console.log(list.searchByValue('3'));
// console.log(list.searchByValue('3', 4));
// console.log(list.searchByValue('error-value'));

// console.log(list.removeByValue('test-null'));
// console.log(list.removeByValue('head'));
// console.log(list.removeByValue('tail'));
// console.log(list.removeByValue('1'));

// list.clearList();
// console.log(list);
// console.log(list.getList());
// list.toString();