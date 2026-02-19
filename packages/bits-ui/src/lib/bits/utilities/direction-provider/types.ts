import type { Direction } from "$lib/shared/index.js";
import type { WithChildren } from "$lib/internal/types.js";

export type DirectionProviderProps = WithChildren<{
	/**
	 * The reading direction to provide to descendant Bits UI components.
	 */
	dir: Direction;
}>;
