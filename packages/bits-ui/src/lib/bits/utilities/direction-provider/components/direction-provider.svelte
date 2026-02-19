<script lang="ts">
	import type { DirectionProviderProps } from "../types.js";
	import { setDirectionProvider } from "../direction-provider.js";
	import { boxWith } from "svelte-toolbelt";

	let { dir, children }: DirectionProviderProps = $props();

	setDirectionProvider(boxWith(() => dir));
</script>

{@render children?.()}
