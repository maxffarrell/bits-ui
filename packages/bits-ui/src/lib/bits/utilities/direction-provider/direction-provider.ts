import { Context } from "runed";
import { boxWith, type Getter, type ReadableBox } from "svelte-toolbelt";
import type { Direction } from "$lib/shared/index.js";

const DirectionProviderContext = new Context<ReadableBox<Direction | undefined>>(
	"DirectionProvider"
);

export function setDirectionProvider(dir: ReadableBox<Direction | undefined>) {
	return DirectionProviderContext.set(dir);
}

export function resolveDirectionProp(getProp: Getter<Direction | undefined>): ReadableBox<Direction> {
	const providerDir = DirectionProviderContext.getOr(null);
	return boxWith(() => getProp() ?? providerDir?.current ?? "ltr");
}
