class Graph {
	constructor() {
		this.data = {};
	}

	addVertex(vertex) {
		if (this.data[vertex]) return;

		this.data[vertex] = [];
	}

	removeVertex(vertex) {
		if (!vertex || !(vertex in this.data)) return;

		delete this.data[vertex];

		Object.entries(this.data).forEach(([vert, arr]) => {
			this.data[vert] = arr.filter(v => v !== vertex);
		});
	}

	addEdge(vertex1, vertex2) {

		if (
			vertex1 === vertex2 || !vertex1 || !vertex2 ||
			typeof vertex1 !== 'string' || typeof vertex2 !== 'string' ||
			!(vertex1 in this.data) || !(vertex2 in this.data)
		) return;

		if (!this.data[vertex1].includes(vertex2)) {
			this.data[vertex1].push(vertex2);
		}

		if (!this.data[vertex2].includes(vertex1)) {
			this.data[vertex2].push(vertex1);
		}
	}

	removeEdge(vertex1, vertex2) {
		if (!this.data[vertex1] || !this.data[vertex2]) return;

		this.data[vertex1] = this.data[vertex1].filter(v => v !== vertex2);
		this.data[vertex2] = this.data[vertex2].filter(v => v !== vertex1);
	}
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.removeVertex('D');
graph.removeVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');

graph.removeEdge('A', 'B')

console.log(graph.data);