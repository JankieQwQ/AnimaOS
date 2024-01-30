class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	append(data) {
		const newNode = new Node(data);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
	}

	insert(position, data) {
		if (position < 0 || position > this.length) {
			return false;
		}

		const newNode = new Node(data);

		if (position === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else if (position === this.length) {
			this.tail.next = newNode;
			this.tail = newNode;
		} else {
			let current = this.head;
			let previous = null;
			let index = 0;

			while (index < position) {
				previous = current;
				current = current.next;
				index++;
			}

			newNode.next = current;
			previous.next = newNode;
		}

		this.length++;
		return true;
	}

	removeAt(position) {
		if (position < 0 || position >= this.length) {
			return null;
		}

		let current = this.head;

		if (position === 0) {
			this.head = current.next;
			if (position === this.length - 1) {
				this.tail = null;
			}
		} else {
			let previous = null;
			let index = 0;

			while (index < position) {
				previous = current;
				current = current.next;
				index++;
			}

			previous.next = current.next;
			if (position === this.length - 1) {
				this.tail = previous;
			}
		}

		this.length--;
		return current.data;
	}

	indexOf(data) {
		let current = this.head;
		let index = 0;

		while (current) {
			if (current.data === data) {
				return index;
			}
			current = current.next;
			index++;
		}

		return -1;
	}

	isEmpty() {
		return this.length === 0;
	}

	size() {
		return this.length;
	}

	toString() {
		let current = this.head;
		let str = '';

		while (current) {
			str += current.data + ' -> ';
			current = current.next;
		}

		str += 'null';
		return str;
	}
}