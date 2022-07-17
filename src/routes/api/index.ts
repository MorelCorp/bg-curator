import { gamesDoc } from '../../modules/firebase/firebase';
import type { game } from '../../modules/firebase/types';

export async function GET() {
	const gamesSnap = await gamesDoc();

	if (!gamesSnap || gamesSnap.empty) {
		return {
			status: 404
		};
	}

	console.log('Fetching a games local copy');

	const games: game[] = [];
	gamesSnap.docs.forEach((doc) => {
		games.push(doc.data() as game);
	});

	return {
		status: 200,
		body: { games }
	};
}
