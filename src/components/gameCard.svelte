<script lang="ts">
	import type { game } from '../modules/firebase/types';
	export let item: game;
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href="/game/{item.id}"
>
	<img src={item.bgg.thumbnail} alt={item.name} />
	<h2>
		{item.name}
	</h2>
</a>
