# node-mean-template-wc

[![Build Status](https://github.com/mgenware/node-mean-template-wc/workflows/Build/badge.svg)](https://github.com/mgenware/node-mean-template-wc/actions)
[![MEAN Module](https://img.shields.io/badge/MEAN%20Module%20WC-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/node-mean-template-wc)

Node.js TypeScript boilerplate for **Web components**. For standard node projects, see [node-mean-template](https://github.com/mgenware/node-mean-template)

- Uses TypeScript 3 project references
- Commands for development, testing, linting, clean and build
- Powered by [modern web tools](https://github.com/modernweb-dev/web)

## Folder structure

|              | Description                                | Uploaded to Git | Uploaded to npm |
| ------------ | ------------------------------------------ | --------------- | --------------- |
| `src`        | TypeScript source files                    | ✅              | ❌              |
| `tests`      | TypeScript tests files                     | ✅              | ❌              |
| `dist`       | Compiled JavaScript, type definition files | ❌              | ✅              |
| `dist_tests` | Compiled JavaScript tests files            | ❌              | ❌              |
| `demo`       | HTML entry during development              | ✅              | ❌              |

## Scripts

> This project uses [daizong](https://github.com/mgenware/daizong) to manage scripts. You need to run scripts through daizong via `yarn r <script>` or `npm run r <script>`.

### For development

- `yarn r dev` starts the development mode, which watches and compiles all source files including tests files.
- `yarn r serve` starts demo page in browser in development mode.
- `yarn r t` runs tests in development mode.

> Tip: You can keep 3 terminal tabs open to run the 3 scripts above during development.

### For production

- `yarn r build` cleans, lints, compiles the project and runs tests.

### Other scripts

You do not need to manually run these scripts, they are already integrated into other scripts.

- `yarn r lint` lints the project using ESLint, auto triggered by `yarn r build`.
- `yarn r clean` deletes all build artifacts, auto triggered by `yarn r dev` or `yarn r build`.

### No `prepublishOnly`

The `prepublishOnly` script was removed, we recommend using [np](https://github.com/sindresorhus/np) to publish packages, which will automatically run `yarn test`, which runs `yarn r build` before publishing.
