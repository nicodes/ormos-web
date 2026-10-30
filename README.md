<!-- Generated from private documentation source. Do not edit directly. Source SHA256: a3b64ade7e2d1c27568aa1150545dc386a8009cec473f5fad0eb07c42050944f -->

# ormos-web

Static website built with Astro.

Install [mise](https://mise.jdx.dev/) and run `mise install`, then run:

```sh
mise run dev                 # Development server
mise run check               # Complete applicable source, build and output checks
mise run build           # Generate dist/
mise tasks ls            # Inspect tools and available commands
```

Ctrl-C stops development. This website needs no runtime credentials or credential `.env` file.

Report security issues through this repository’s **Security → Report a vulnerability** form.

## Install the CLI

With curl:

```sh
curl -fsSL https://ormos.dev/install | sh
```

Or with mise:

```sh
mise use --global github:nicodes/ormos@latest
```

An icon-only copy control sits on the right inside each install-command outline and shows a checkmark after copying. If clipboard access is unavailable, the command remains selectable for manual copying.

See [ormos](https://github.com/nicodes/ormos#readme) for setup and installation options.

For contributor verification, prepare the pinned helper source before running native tasks:

```sh
git clone https://github.com/nicodes/tools.git .ci-tools
git -C .ci-tools checkout --detach f7e243524ce2aa29f299e4c79db33001f72f4a30
mise install
mise run check
```

Build commands record source and exact regular output hashes. Declared tests produce evidence from the current verification session in `.artifacts/verification`.
