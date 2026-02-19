import { defineUtilityApiSchema } from "../utils.js";
import { childrenSnippet, dirProp } from "./shared.js";
import type { DirectionProviderProps } from "bits-ui";

export const directionProvider = defineUtilityApiSchema<DirectionProviderProps>({
	title: "DirectionProvider",
	description: "Provides reading direction context for descendant Bits UI components.",
	props: {
		dir: dirProp,
		children: childrenSnippet(),
	},
});
