<script lang="ts">
	import { DirectionProvider, Popover, ScrollArea } from "bits-ui";
</script>

<ScrollArea.Root data-testid="no-provider-root" />

<DirectionProvider dir="rtl">
	<ScrollArea.Root data-testid="provider-rtl-root" />
</DirectionProvider>

<DirectionProvider dir="rtl">
	<DirectionProvider dir="ltr">
		<ScrollArea.Root data-testid="nested-ltr-root" />
	</DirectionProvider>
</DirectionProvider>

<DirectionProvider dir="rtl">
	<ScrollArea.Root dir="ltr" data-testid="explicit-ltr-root" />
</DirectionProvider>

<DirectionProvider dir="rtl">
	<Popover.Root open>
		<Popover.Trigger data-testid="portal-trigger">Open</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content data-testid="portal-content">Portal Content</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
</DirectionProvider>
