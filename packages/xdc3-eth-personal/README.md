# xdc3-eth-personal

[![NPM Package][npm-image]][npm-url] [![Dependency Status][deps-image]][deps-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url]

This is a sub-package of [xdc3.js][repo].

This is the personal package used in the `xdc3-eth` package.

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install xdc3-eth-personal
```

## Usage

```js
const Web3EthPersonal = require('xdc3-eth-personal');

const personal = new Web3EthPersonal('ws://localhost:8546');
```

## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/xdc3.js
[npm-image]: https://img.shields.io/npm/v/xdc3-eth-personal.svg
[npm-url]: https://npmjs.org/package/xdc3-eth-personal
[deps-image]: https://david-dm.org/ethereum/xdc3.js/1.x/status.svg?path=packages/xdc3-eth-personal
[deps-url]: https://david-dm.org/ethereum/xdc3.js/1.x?path=packages/xdc3-eth-personal
[deps-dev-image]: https://david-dm.org/ethereum/xdc3.js/1.x/dev-status.svg?path=packages/xdc3-eth-personal
[deps-dev-url]: https://david-dm.org/ethereum/xdc3.js/1.x?type=dev&path=packages/xdc3-eth-personal
