intersection(
	[[8, 12], [17, 22]],
	[[5, 11], [14, 18], [20, 23]]
); // [[8, 11], [17, 18], [20, 22]]

intersection(
	[[9, 15], [18, 21]],
	[[10, 14], [21, 22]]
); // [[10, 14]]

function intersection(user1, user2) {
	const result = [];

	for (let i = 0, j = 0; i < user1.length; i++) {

		for (; j < user2.length; j++) {

			if (user1[i][1] < user2[j][0]) {
				break;
			}
			
			if (user1[i][0] < user2[j][1] && user1[i][1] > user2[j][0]) {

				const arr = [];

				arr.push(Math.max(user1[i][0], user2[j][0]))

				arr.push(Math.min(user1[i][1], user2[j][1]))

				result.push(arr);
			}

			if (user1[i][1] < user2[j][1]) {
				break;
			}
		}
	}

	console.log(result);
	return result;
}
