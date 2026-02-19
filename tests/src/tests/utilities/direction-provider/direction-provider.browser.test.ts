import { expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import { page } from "@vitest/browser/context";
import DirectionProviderTest from "./direction-provider-test.svelte";

it("should default to ltr when no provider is present", async () => {
	render(DirectionProviderTest);
	await expect.element(page.getByTestId("no-provider-root")).toHaveAttribute("dir", "ltr");
});

it("should inherit rtl direction from provider", async () => {
	render(DirectionProviderTest);
	await expect.element(page.getByTestId("provider-rtl-root")).toHaveAttribute("dir", "rtl");
});

it("should let nested providers override parent direction", async () => {
	render(DirectionProviderTest);
	await expect.element(page.getByTestId("nested-ltr-root")).toHaveAttribute("dir", "ltr");
});

it("should let explicit dir prop override provider direction", async () => {
	render(DirectionProviderTest);
	await expect.element(page.getByTestId("explicit-ltr-root")).toHaveAttribute("dir", "ltr");
});

it("should apply provider direction to floating content rendered through a portal", async () => {
	render(DirectionProviderTest);
	const content = page.getByTestId("portal-content");
	await expect.element(content).toBeInTheDocument();

	const wrapper = content.element().parentElement;
	expect(wrapper?.getAttribute("dir")).toBe("rtl");
});
