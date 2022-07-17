import { getDoc } from 'firebase/firestore/lite';
import { gameDoc } from '../../../modules/firebase/firebase';
import type { game } from '../../../modules/firebase/types';

export async function GET({ params }: { params: { id: string } }) {
	const gameRef = gameDoc(params.id);
	const gameSnap = await getDoc(gameRef);

	if (!gameSnap.exists()) {
		return {
			status: 404
		};
	}

	const game: game = gameSnap.data() as game;

	return {
		status: 200,
		body: { game }
	};
}
