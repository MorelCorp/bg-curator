<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';
	import type { game } from '../../modules/firebase/types';

	export async function load({ fetch, params }: LoadEvent) {
		const url = `/api/game/${params.id}`;
		const res = await fetch(url);
		const response = await res.json();

		let game = response.game;

		return { props: { game } };
	}
</script>

<script lang="ts">
	export let game: game;
</script>

<div class="card w-96 bg-base-100 shadow-xl image-full">
	<figure><img src={game.bgg.thumbnail} alt={game.name} /></figure>
	<div class="card-body">
		<h2 class="card-title">{game.name}</h2>
		<p>Cool game.</p>
		<div class="card-actions justify-end">
			<a
				class="btn btn-primary"
				href={`https://www.boardgamegeek.com/${game.bgg.href}`}
				target="_blank">More on BGG</a
			>
		</div>
	</div>
</div>
