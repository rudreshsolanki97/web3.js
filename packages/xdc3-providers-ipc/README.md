# xdc3-providers-ipc

[![NPM Package][npm-image]][npm-url] [![Dependency Status][deps-image]][deps-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url]

This is an IPC provider sub-package for [xdc3.js][repo].

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install xdc3-providers-ipc
```

## Usage

```js
const Web3IpcProvider = require('xdc3-providers-ipc');
const net = require(net);

const ipc = new Web3IpcProvider('/Users/me/Library/Ethereum/geth.ipc', net);
```

## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/xdc3.js
[npm-image]: https://img.shields.io/npm/v/xdc3-providers-ipc.svg
[npm-url]: https://npmjs.org/package/xdc3-providers-ipc
[deps-image]: https://david-dm.org/ethereum/xdc3.js/1.x/status.svg?path=packages/xdc3-providers-ipc
[deps-url]: https://david-dm.org/ethereum/xdc3.js/1.x?path=packages/xdc3-providers-ipc
[deps-dev-image]: https://david-dm.org/ethereum/xdc3.js/1.x/dev-status.svg?path=packages/xdc3-providers-ipc
[deps-dev-url]: https://david-dm.org/ethereum/xdc3.js/1.x?type=dev&path=packages/xdc3-providers-ipc
