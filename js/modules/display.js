import { $card, SHUFFLE_IMG_PATH } from '../game.js';

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		// Échange des éléments array[i] et array[j]
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function pathWithTile(map) {
	for (let i = 0; i < $card.length; i++) {
		map.set(`${$card[i].id}`, `${SHUFFLE_IMG_PATH[i]}`);
	}
}

export { shuffleArray, pathWithTile };
