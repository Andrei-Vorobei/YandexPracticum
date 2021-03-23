function allSentences(words) {

	const comb = Array(words.length).fill(0);
	const maxIndx = comb.length - 1;
	let pos = maxIndx;
	let isEnd = false;

	return () => {

		if (isEnd) {
			return undefined;
		}

		const sentence = words.map((word , i) => {
			return word[comb[i]]
		});

		if (comb[pos] < words[pos].length - 1) {
			comb[pos]++
		}
		else {
			pos--;

			while (comb[pos] === words[pos].length - 1) {
				if (pos > 0) {
					pos--;
				}
				else {
					pos = maxIndx;
					isEnd = true;
					break;
				}
			}

			comb[pos]++;

			for (let i = pos + 1; i <= maxIndx; i++) {
				comb[i] = 0;
			}

			pos = maxIndx;
		}

		return sentence.join(' ');
	}
}

const nextSentence = allSentences([
	['1', '2'],
	['1', '2', '3'],
	['1', '2', '3', '4']
	// ... тут могут быть другие слова с любым количеством своих форм
]);

nextSentence(); // 'внучка маша'
nextSentence(); // 'внучка махать'
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
nextSentence();
// ... и т. д. все комбинации
// nextSentence(); // undefined