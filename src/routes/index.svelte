<script lang="ts" context="module">
	import { games } from '../stores/gamestore';
	import GameCard from '../components/gameCard.svelte';
</script>

<svelte:head>
	<title>BG Curator</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit - BG Curator</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search Games"
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each $games as game}
		<GameCard item={game} />
	{/each}
</div>
