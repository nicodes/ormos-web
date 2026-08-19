// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Astro 7 defaults to JSX whitespace compression. Keep Astro 6's
	// HTML-aware behavior so adjacent inline content renders unchanged.
	compressHTML: true,
	// Never fold a stylesheet into an inline <style>. The site's
	// Content-Security-Policy (vercel.json) allows style-src 'self' with no
	// 'unsafe-inline'; auto-inlining (Astro's default for sheets under ~4kB)
	// would emit an inline <style> the CSP then blocks. Keeping stylesheets as
	// linked files served from this origin is what lets the CSP stay maximal.
	build: { inlineStylesheets: 'never' },
});
