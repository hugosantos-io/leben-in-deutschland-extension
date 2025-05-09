# Leben in Deutschland Extension

A Chrome extension that reads Leben in Deutschland page and logs information to the console.

## Features

- Monitors the exact page `https://oet.bamf.de/ords/oetut/f?p=534:30::::::`
- Logs to console:
  - Timestamp
  - Random number between 1 and 10000
  - Formatted log messages with different levels (INFO, WARN, ERROR, DEBUG)
- Popup interface showing extension status

## Technical Stack

- TypeScript
- Webpack
- Manifest V3
- Content Security Policy (CSP)
- Custom logging system

## Project Structure

```plain
.
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── icon-16.png
│   │       ├── icon-32.png
│   │       ├── icon-48.png
│   │       └── icon-128.png
│   ├── content/
│   │   └── content.ts
│   ├── popup/
│   │   ├── popup.html
│   │   └── popup.ts
│   ├── utils/
│   │   └── logger.ts
│   └── _locales/
│       └── en/
│           └── messages.json
├── dist/           # Compiled and bundled files
├── manifest.json
├── webpack.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Development Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Development mode with hot reload:

   ```bash
   npm run dev
   ```

3. Production build:

   ```bash
   npm run prod
   ```

4. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` directory

## Build Process

The build process using Webpack:

1. Compiles TypeScript to JavaScript
2. Bundles all JavaScript files
3. Processes CSS files
4. Copies static assets (images, manifest, etc.)
5. Generates HTML files
6. Minifies and optimizes the output

## Security Features

- Content Security Policy (CSP) implementation
- Secure resource loading
- Error handling and logging
- Type safety with TypeScript

## Logging

The extension uses a custom logging system with different log levels:

- INFO: General information
- WARN: Warning messages
- ERROR: Error messages
- DEBUG: Debug information

Each log message includes:

- Timestamp
- Log level
- Message
- Optional data object

## Commit Types

The project follows the Conventional Commits specification. Here are the allowed commit types:

- `feat`: new features
- `fix`: bug fixes
- `docs`: documentation changes
- `style`: style changes
- `refactor`: code refactoring
- `perf`: performance improvements
- `test`: test changes
- `build`: build system changes
- `ci`: CI configuration changes
- `chore`: maintenance tasks
- `revert`: revert commits

Example commit message:

```plain
feat(logger): add debug level and configurable log levels
```
