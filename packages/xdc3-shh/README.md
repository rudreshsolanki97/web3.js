# xdc3-shh

[![NPM Package][npm-image]][npm-url] [![Dependency Status][deps-image]][deps-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url]

This is a sub-package of [xdc3.js][repo]

This is the whisper v5 package.

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install xdc3-shh
```

## Usage

```js
const Web3Personal = require('xdc3-shh');

const shh = new Web3Personal('ws://localhost:8546');
```

## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/xdc3.js
[npm-image]: https://img.shields.io/npm/v/xdc3-shh.svg
[npm-url]: https://npmjs.org/package/xdc3-shh
[deps-image]: https://david-dm.org/ethereum/xdc3.js/1.x/status.svg?path=packages/xdc3-shh
[deps-url]: https://david-dm.org/ethereum/xdc3.js/1.x?path=packages/xdc3-shh
[deps-dev-image]: https://david-dm.org/ethereum/xdc3.js/1.x/dev-status.svg?path=packages/xdc3-shh
[deps-dev-url]: https://david-dm.org/ethereum/xdc3.js/1.x?type=dev&path=packages/xdc3-shh
