# BGPFiend website

SvelteKit static site for [bgpfiend.io](https://bgpfiend.io), built with SMUI (Svelte Material UI) and deployed to GitHub Pages.

## Install

```sh
npm install
```

## Development

Start the dev server:

```sh
npm run dev
```

Open in browser automatically:

```sh
npm run dev -- --open
```

## Build & Preview

Build for production:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deploy

Deployment is automated via GitHub Actions. Every push to the `main` branch triggers the workflow at [`.github/workflows/`](.github/workflows/), which:

1. Installs dependencies
2. Builds the site
3. Deploys the `build/` directory to GitHub Pages

No manual deploy step is needed.

## Theming

The site uses SMUI with a custom theme defined in [`src/theme/_smui-theme.scss`](src/theme/_smui-theme.scss). After editing any theme variables, recompile the CSS:

```sh
npm run smui-theme
```

This regenerates [`static/smui.css`](static/smui.css). Commit both the `_smui-theme.scss` source and the compiled `smui.css`.

## Domain / CNAME

The custom domain is set in [`static/CNAME`](static/CNAME), currently:

```
bgpfiend.io
```

If the domain changes, update that file. GitHub Pages reads it on every deploy to configure the custom domain.

## Code Style

Format the codebase with Prettier:

```sh
npm run format
```
