function reverse(head) {

	let newHead = head.next;

	head.next = null;

	let nextNode = newHead.next;

	newHead.next = head;



	while (nextNode) {
		
		const tmp = nextNode.next;

		nextNode.next = newHead;
		
		newHead = nextNode;
		
		nextNode = tmp;
	}

	return newHead;
}