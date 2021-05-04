const c = [
	() => import("../../../src/routes/$layout.svelte"),
	() => import("../../../src/routes/$error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/about-me.svelte"),
	() => import("../../../src/routes/blog/[article].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/about-me.svelte
	[/^\/about-me\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/blog/[article].svelte
	[/^\/blog\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ article: d(m[1])})]
];

export const fallback = [c[0](), c[1]()];