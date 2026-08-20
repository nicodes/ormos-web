// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Astro 7 defaults to JSX whitespace compression. Keep Astro 6's
	// HTML-aware behavior so adjacent inline content renders unchanged.
	compressHTML: true,
	vite: {
		// Vite 8 defaults to Safari 16.4, which permits Media Queries Level 4
		// range syntax. Keep Vite 7's Safari 16.0 floor so iOS 16.0-16.3
		// receives legacy-parsable responsive breakpoints.
		build: { cssTarget: ['safari16', 'ios16'] },
	},
	// Never fold a stylesheet into an inline <style>. The site's
	// Content-Security-Policy (vercel.json) allows style-src 'self' with no
	// 'unsafe-inline'; auto-inlining (Astro's default for sheets under ~4kB)
	// would emit an inline <style> the CSP then blocks. Keeping stylesheets as
	// linked files served from this origin is what lets the CSP stay maximal.
	build: { inlineStylesheets: 'never' },
});
