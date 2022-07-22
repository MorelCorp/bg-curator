<script lang="ts" context="module">
	import { gameStoreReady, games } from '../stores/gamestore';
	import type { game } from '../modules/firebase/types';
	import GameCard from '../components/gameCard.svelte';
	import Loading from '../components/loading.svelte';
</script>

<script lang="ts">
	let searchTerm = '';
	let filteredGames: game[] = [];

	$: {
		if (searchTerm) {
			filteredGames = $games.filter((game) =>
				game.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			if (filteredGames.length > 20) {
				filteredGames = filteredGames.slice(0, 20);
			}
		} else {
			filteredGames = [...$games.slice(0, 20)];
		}
	}
</script>

<!-- svelte-ignore module-script-reactive-declaration -->
<svelte:head>
	<title>BG Curator</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit - BG Curator</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search Games"
	bind:value={searchTerm}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#if !$gameStoreReady}
		<Loading />
	{:else}
		{#each filteredGames as game, gameIndex}
			<GameCard item={game} />
		{/each}
	{/if}
</div>
