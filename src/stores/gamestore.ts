import { gamesDoc } from '../modules/firebase/firebase';
import type { game } from '../modules/firebase/types';

import { writable } from 'svelte/store';

export const games = writable<game[]>([]);

const fetchGames = async () => {
	const gamesSnap = await gamesDoc();

	const loadedGames: game[] = [];
	gamesSnap.docs.forEach((doc) => {
		const game: game = doc.data() as game;
		game.id = doc.id;
		loadedGames.push(game);
	});

	games.set(loadedGames);
};

fetchGames();
