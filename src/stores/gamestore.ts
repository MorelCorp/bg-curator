import { gamesDoc } from '../modules/firebase/firebase';
import type { game } from '../modules/firebase/types';

import { writable } from 'svelte/store';

export const games = writable<game[]>([]);

const fetchGames = async () => {
	const gamesSnap = await gamesDoc();

	// if (!gamesSnap || gamesSnap.empty) {
	// 	return {
	// 		status: 404
	// 	};
	// }

	const loadedGames: game[] = [];
	gamesSnap.docs.slice(0, 20).forEach((doc) => {
		const game: game = doc.data() as game;
		game.id = doc.id;
		loadedGames.push(game);
	});

	console.log(loadedGames[10]);

	games.set(loadedGames);
};

fetchGames();
