# Ormos website

Static Astro landing page for [Ormos](https://ormos.dev).

Primary destination: [Ormos](https://github.com/nicodes/ormos#readme).

Ormos is a local executable for browser terminals and app previews. The landing page links to installation and private Tailscale access rather than a retired hosted application.

## Development

Use the Bun version in `.mise.toml`.

```sh
bun install --frozen-lockfile
bun run dev
bun run build
bun run preview
```

Run `bun run typecheck` before building.

The site is static and ships no client-side JavaScript. Existing CI validates the build and product-specific output contract.

## Standard developer commands

Use `mise install` to install the pinned Bun toolchain. Run `mise exec -- make check` for frozen dependency installation, source lint, type checking, the static build and all output assertions. `make test` verifies an existing build. `make dev` runs the development server in the foreground; stop it with Ctrl-C. `make clean` removes generated output.
