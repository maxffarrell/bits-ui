---
title: DirectionProvider
description: Provides reading direction context for descendant Bits UI components.
---

<script>
	import { APISection } from '$lib/components/index.js'
	let { schemas } = $props()
</script>

## Overview

`DirectionProvider` sets a default reading direction (`"ltr"` or `"rtl"`) for Bits UI components within its scope.

Direction is resolved in this order:

1. Component `dir` prop
2. Nearest `DirectionProvider`
3. Built-in fallback: `"ltr"`

## Basic Usage

Set direction once for a section of your app:

```svelte
<script lang="ts">
	import { DirectionProvider, Slider } from "bits-ui";
</script>

<DirectionProvider dir="rtl">
	<Slider.Root type="single">
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb />
	</Slider.Root>
</DirectionProvider>
```

## Nested Providers

Inner providers override outer providers:

```svelte
<script lang="ts">
	import { DirectionProvider, ScrollArea } from "bits-ui";
</script>

<DirectionProvider dir="rtl">
	<!-- uses rtl -->
	<ScrollArea.Root>
		<ScrollArea.Viewport>...</ScrollArea.Viewport>
	</ScrollArea.Root>

	<DirectionProvider dir="ltr">
		<!-- uses ltr -->
		<ScrollArea.Root>
			<ScrollArea.Viewport>...</ScrollArea.Viewport>
		</ScrollArea.Root>
	</DirectionProvider>
</DirectionProvider>
```

## Local Override

A component `dir` prop always overrides provider context:

```svelte
<script lang="ts">
	import { DirectionProvider, Menubar } from "bits-ui";
</script>

<DirectionProvider dir="rtl">
	<Menubar.Root dir="ltr">
		<!-- uses ltr -->
	</Menubar.Root>
</DirectionProvider>
```

## Portals and Floating Content

Direction context also applies to floating/portalled content (e.g. popovers, menus, tooltips) unless explicitly overridden by `dir` on the content component.

<APISection {schemas} />
