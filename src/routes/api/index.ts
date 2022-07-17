import { gamesDoc } from '../../modules/firebase/firebase';
import type { game } from '../../modules/firebase/types';

export async function GET() {
	const gamesSnap = await gamesDoc();

	if (!gamesSnap || gamesSnap.empty) {
		return {
			status: 404
		};
	}

	const games: game[] = [];
	// gamesSnap.docs.forEach((doc) => {
	gamesSnap.docs.slice(0, 20).forEach((doc) => {
		games.push(doc.data() as game);
	});

	// console.log('ALL THE GAMES: ', games.length);

	return {
		status: 200,
		body: { games }
	};
}
