"use strict";

class MyArray {
	constructor(initialSize = 1) {
		if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
			throw new Error('Длина массива должна быть целым числом');
		}

		if (!(initialSize > 0)) {
			throw new Error('Размер массива должен быть больше нуля');
		}

		this.size = initialSize;
		this.memory = allocate(initialSize);
		this.length = 0;
	}

	// Возвращает значение по индексу.
	// Если индекс за пределами — кидает ошибку.
	get(index) {
		if (this.indexValidate(index)) {
			return this.memory[index];
		}
	}

	// Устанавливает значение по индексу.
	// Если индекс за пределами — кидает ошибку.
	set(index, value) {
		if (this.indexValidate(index)) {
			this.memory[index] = value;
		}
	}

	// Добавляет новый элемент в массив.
	// Если index не определён — добавляет в конец массива.
	// В противном случае — добавляет по индексу со сдвигом
	// всех последующих элементов.
	// Если индекс за пределами - кидает ошибку.
	// Увеличивает выделенную память вдвое, если необходимо.
	// Возвращает новую длину массива.

	add(value, index) {
		if (index === undefined) {
			this.set(this.length, value);
		} else {
			if (this.indexValidate(index)) {
				for (let i = this.length; i > index; i--) {
					this.memory[i] = this.memory[i - 1];
				}
			}

			this.set(index, value);
		}

		if (this.length === this.size) {
			this.size *= 2;
			this.memory = Object.assign(allocate(this.size), this.memory);
		}

		return this.length += 1;
	}

	// Удаляет элемент по индексу со сдвигом всех последующих элементов.
	// Если индекс за пределами - кидает ошибку.
	// Возвращает новую длину массива.
	delete(index) {
		if (this.indexValidate(index)) {
			for (let i = index; i < this.length - 1; i++) {
				this.memory[i] = this.memory[i + 1];
			}

			this.memory[this.length - 1] = undefined;
		}

		return this.length -= 1;
	}

	indexValidate(index) {
		if (index > this.length || index < 0) {
			throw new Error(`Индекс не должен быть больше длины массива ${this.length}`);
		} else {
			return true;
		}
	}
}

function allocate(size) {
	const memory = {};

	for (let i = 0; i < size; i++) {
		memory[i] = undefined;
	}

	return memory;
}


// TEST
const arr = new MyArray()

console.log('Новая длина массива после добавления элемента: ', arr.add('first value'));
console.log('Новая длина массива после добавления элемента: ', arr.add('second value'));
console.log('Новая длина массива после добавления элемента: ', arr.add('third value'));
console.log('Новая длина массива после добавления элемента: ', arr.add('fourth value'));

console.log('Новая длина массива после добавления элемента по индексу: ', arr.add('middle', 2));

console.log('Значение элемента массива по индексу 2: ', arr.get(2));
arr.set(2, 'set value');
console.log('Значение элемента массива по индексу 2: ', arr.get(2));

(() => {
	try {
		arr.add('error', 99);
	} catch (err) {
		console.error(err);
	}
})();

console.log('Новая длина массива после удаления элемента: ', arr.delete(2));

(() => {
	try {
		arr.delete(99);
	} catch (err) {
		console.error(err);
	}
})();

console.log(arr);
