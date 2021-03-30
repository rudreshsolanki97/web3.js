# xdc3-eth-iban

[![NPM Package][npm-image]][npm-url] [![Dependency Status][deps-image]][deps-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url]

This is a sub package of [xdc3.js][repo]

This is the IBAN package to be used in the `xdc3-eth` package.

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install xdc3-eth-iban
```

## Usage

```js
const Web3EthIban = require('xdc3-eth-iban');

const iban = new Web3EthIban('XE75JRZCTTLBSYEQBGAS7GID8DKR7QY0QA3');
iban.toAddress() > '0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B';
```

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/xdc3.js

## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/xdc3.js
[npm-image]: https://img.shields.io/npm/v/xdc3-eth-iban.svg
[npm-url]: https://npmjs.org/package/xdc3-eth-iban
[deps-image]: https://david-dm.org/ethereum/xdc3.js/1.x/status.svg?path=packages/xdc3-eth-iban
[deps-url]: https://david-dm.org/ethereum/xdc3.js/1.x?path=packages/xdc3-eth-iban
[deps-dev-image]: https://david-dm.org/ethereum/xdc3.js/1.x/dev-status.svg?path=packages/xdc3-eth-iban
[deps-dev-url]: https://david-dm.org/ethereum/xdc3.js/1.x?type=dev&path=xdc3-eth-iban
